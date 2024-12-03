
document.getElementById('openModal').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.remove('hidden');
    overlay.hidden = false;
    this.setAttribute('aria-expanded', 'true');
});

document.getElementById('closeModal').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.add('hidden');
    overlay.hidden = true;
    document.getElementById('openModal').setAttribute('aria-expanded', 'false');
});

document.getElementById('purpose').addEventListener('change', function () {
    const eventDetails = document.getElementById('eventDetails');
    if (this.value === 'speakers') {
        eventDetails.hidden = false;
    } else {
        eventDetails.hidden = true;
    }
});
