// Manage focus and section visibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        document.querySelectorAll('.page-section').forEach(section => section.classList.add('hidden'));
        target.classList.remove('hidden');
        target.focus();
        history.pushState(null, '', event.target.getAttribute('href'));
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
document.getElementById('openModal').addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
    modal.focus();
});
document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});

// Show/Hide "Tell us about your event"
document.getElementById('purpose').addEventListener('change', (event) => {
    const eventDetails = document.getElementById('eventDetails');
    eventDetails.classList.toggle('hidden', event.target.value !== 'speakers');
});

// Switch functionality
const switchElement = document.getElementById('emailUpdates');
switchElement.addEventListener('click', () => {
    const isChecked = switchElement.getAttribute('aria-checked') === 'true';
    switchElement.setAttribute('aria-checked', !isChecked);
});

// Form submission
document.getElementById('scheduleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for scheduling a call with us!');
});



