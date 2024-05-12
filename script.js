document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.toLowerCase();
        cards.forEach(function(card) {
            const title = card.querySelector('.header').textContent.toLowerCase();
            // Set display based solely on the title match
            if (title.includes(searchValue)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
