// Manage focus and navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const section = document.querySelector(event.target.getAttribute('href'));
        document.querySelectorAll('main section').forEach(sec => sec.hidden = true);
        section.hidden = false;
        section.focus();
        history.pushState(null, section.querySelector('h1').innerText, event.target.getAttribute('href'));
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
document.getElementById('openModal').addEventListener('click', () => {
    modal.hidden = false;
    modalOverlay.hidden = false;
    modal.focus();
});

document.getElementById('closeModal').addEventListener('click', () => {
    modal.hidden = true;
    modalOverlay.hidden = true;
});

// Show/Hide "Tell us about your event" field
document.getElementById('purpose').addEventListener('change', (event) => {
    const eventDetails = document.getElementById('eventDetails');
    eventDetails.hidden = event.target.value !== 'speakers';
});

// Custom switch functionality
const switchElement = document.getElementById('emailUpdates');
switchElement.addEventListener('click', () => {
    const isChecked = switchElement.getAttribute('aria-checked') === 'true';
    switchElement.setAttribute('aria-checked', !isChecked);
});

// Form submission
document.getElementById('scheduleForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! We will get back to you soon.');
});

