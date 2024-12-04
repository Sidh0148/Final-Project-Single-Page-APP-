
document.addEventListener('DOMContentLoaded', function () {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Modal Elements
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

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

    // Open Modal
    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modalOverlay.hidden = false;
        openModalButton.setAttribute('aria-expanded', 'true');
        modal.focus();
    });

    // Close Modal
    function closeModal() {
        modal.classList.add('hidden');
        modalOverlay.hidden = true;
        openModalButton.setAttribute('aria-expanded', 'false');
        openModalButton.focus();
    }

    closeModalButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});

// Ensure section toggling functionality works
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block'; // Show the selected section
            } else {
                section.style.display = 'none'; // Hide all other sections
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').replace('#', '');
            showSection(targetSection);
        });
    });

    // Show only the Home section by default
    showSection('home');
});
