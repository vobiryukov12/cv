const ELEMENTS_SELECTOR = {
  buttons: document.querySelectorAll('.tabs__item'),
  cards: document.querySelectorAll('.cards-item')
};

ELEMENTS_SELECTOR.buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentCategory = button.dataset.filter;
    filter(currentCategory, ELEMENTS_SELECTOR.cards);

    ELEMENTS_SELECTOR.buttons.forEach((elem) => {
      elem.classList.remove('tabs__item--active');
    });
    button.classList.add('tabs__item--active');
  });
});

function filter (category, items) {
  items.forEach((item) => {
    const isItemFiltered = !item.classList.contains(category);
    const isShowAll = category.toLowerCase() === 'all';
    isItemFiltered && !isShowAll ? item.classList.add('hide') : item.classList.remove('hide');
  });
}
