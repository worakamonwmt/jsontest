const navbar = document.querySelector('.navbar');

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > 60) { // Adjust the value as needed
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);