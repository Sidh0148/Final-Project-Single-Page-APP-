
document.addEventListener('DOMContentLoaded', function () {
    // Modal Elements
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    // Open Modal
    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modalOverlay.hidden = false;
        openModalButton.setAttribute('aria-expanded', 'true');
    });

    // Close Modal
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
        modalOverlay.hidden = true;
        openModalButton.setAttribute('aria-expanded', 'false');
    });

    // Hide modal if overlay is clicked
    modalOverlay.addEventListener('click', function () {
        modal.classList.add('hidden');
        modalOverlay.hidden = true;
        openModalButton.setAttribute('aria-expanded', 'false');
    });
});
