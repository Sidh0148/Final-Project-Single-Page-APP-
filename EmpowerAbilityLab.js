
document.addEventListener('DOMContentLoaded', function () {
    // Sections
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Set up event listeners for navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').replace('#', '');
            showSection(targetSection);
        });
    });

    // Show the Home section by default
    showSection('home');
});
