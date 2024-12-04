
document.addEventListener('DOMContentLoaded', function () {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden'); // Show the selected section
            } else {
                section.classList.add('hidden'); // Hide all other sections
            }
        });
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetSection = link.getAttribute('href').replace('#', '');
            showSection(targetSection);
        });
    });

    // Initially show only the Home section
    showSection('home');
});
