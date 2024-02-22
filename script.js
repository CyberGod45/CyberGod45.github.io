document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for cue cards to show project details
    const cueCards = document.querySelectorAll('.project-cue-card');

    cueCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
});
