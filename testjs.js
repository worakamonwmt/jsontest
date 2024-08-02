const schoolFile = 'edu.json';
const skillFile = 'skill.json';
const meFile = 'me.json';

fetch(schoolFile)
    .then(response => response.json())
    .then(data => {
        const educationInfoDiv = document.getElementById('education-info-template-literals');
        data.forEach(item => {
            const schoolDiv = document.createElement('div');
            schoolDiv.classList.add('col-12', 'col-lg-4', 'mb-md-3', 'mb-sm-3', 'mb-3');
            schoolDiv.innerHTML = `
                <div class="timeline-container">
                  <div class="edu-card">
                    <img src="${item.logo}" class="education-image" alt="${item.alt}">
                    <h3 class="name-shcool"><strong>${item.schoolName}</strong></h3>
                    <p>${item.program}</p>
                    <p>${item.time}</p>
                  </div>
                </div>
              `;
            educationInfoDiv.appendChild(schoolDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

fetch(skillFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const skillsRow = document.getElementById('skills-row');
        if (!skillsRow) {
            console.error('Skills row element not found');
            return;
        }

        let rowDiv = null;

        data.forEach((logo, index) => {
            if (index % 3 === 0) {
                rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                skillsRow.appendChild(rowDiv);
            }

            const colDiv = document.createElement('div');
            colDiv.classList.add('col-lg-4', 'mt-3', 'd-flex', 'justify-content-center', 'col-6');

            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.classList.add('rounded', 'img-skill');

            colDiv.appendChild(img);
            rowDiv.appendChild(colDiv);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));


fetch(meFile)
    .then(response => response.json())
    .then(data => {
        const meContentDiv = document.getElementById('me-content');
        meContentDiv.innerHTML = `
                  <div class="col-12 col-md-12 col-lg-6">
                    <img src="${data.imageSrc}" width="100%">
                  </div>
                  <div class="col-12 col-md-12 col-lg-6 mtsm-5">
                    <div data-aos="fade-right">
                      <h2 class="topic text-shadow border-pink">${data.heading}</h2>
                    </div>
                    <p class="desabout">${data.description}</p>
                  </div>
                `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
