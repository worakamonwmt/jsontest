const schoolFile = 'edu.json';
const skillFile = 'skill.json';

fetch(schoolFile)
    .then(response => response.json())
    .then(data => {
        // ใช้ Template Literals
        const educationInfoDivTemplateLiterals = document.getElementById('education-info-template-literals');
        data.forEach(item => {
            const schoolDiv = document.createElement('div');
            schoolDiv.innerHTML = `
                <h2>${item.schoolName}</h2>
                <p><strong>Program:</strong> ${item.program}</p>
                <p><strong>Time:</strong> ${item.time}</p>
            `;
            educationInfoDivTemplateLiterals.appendChild(schoolDiv);
        });

        // ใช้การเชื่อมต่อ String แบบดั้งเดิม
        const educationInfoDivStringConcat = document.getElementById('education-info-string-concat');
        data.forEach(item => {
            const schoolDiv = document.createElement('div');
            schoolDiv.innerHTML = 
                '<h2>' + item.schoolName + '</h2>' +
                '<p><strong>Program:</strong> ' + item.program + '</p>' +
                '<p><strong>Time:</strong> ' + item.time + '</p>';
            educationInfoDivStringConcat.appendChild(schoolDiv);
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
        console.log('Data fetched successfully:', data); // Log data to check if it's correct
        const skillsRow = document.getElementById('skills-row');
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
