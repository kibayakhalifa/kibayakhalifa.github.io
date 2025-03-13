// Toggle Navigation Menu
const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('header-nav');
const navLinks = document.querySelectorAll('.header-nav ul li a'); // Select all nav links

// Toggle menu open/close
const toggleMenu = () => {
    headerNav.classList.toggle('active');
    hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
    if (!headerNav.contains(e.target) && !hamburger.contains(e.target)) {
        headerNav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add event listeners to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (headerNav.classList.contains('active')) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Smoothly scroll to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the menu after a short delay (optional)
            setTimeout(() => {
                headerNav.classList.remove('active');
                hamburger.classList.remove('active');
            }, 300); // Adjust the delay as needed
        }
    });
});
