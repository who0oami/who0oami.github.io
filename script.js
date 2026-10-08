const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.post-card[data-category]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    cards.forEach((card) => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  });
});
