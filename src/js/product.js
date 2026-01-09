
const featuredCards = document.querySelectorAll('.featuredcard');


featuredCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        const imgPrefix = card.getAttribute('data-imgprefix');
        const productimg = card.querySelector('img');

        productimg.src = `src/productsimg/${imgPrefix}-2.jpg`;

        card.classList.add('hovered');
    });

    card.addEventListener('mouseout', () => {
        const imgPrefix = card.getAttribute('data-imgprefix');
        const productimg = card.querySelector('img');

        productimg.src = `src/productsimg/${imgPrefix}-1.jpg`;
        card.classList.remove('hovered');
    });
});


