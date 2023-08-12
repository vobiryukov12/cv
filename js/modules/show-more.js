const ELEMENTS_SELECTOR = {
  textToggle: '[data-text-toggle]',
  content: '[data-content-block]',
  hideContent: '[data-hide-content]'
};

document.querySelectorAll(ELEMENTS_SELECTOR.textToggle).forEach((elem) => {
  elem.addEventListener('click', () => {
    const container = elem.closest(ELEMENTS_SELECTOR.content);
    const hideContent = container.querySelector(ELEMENTS_SELECTOR.hideContent);
    const textToggle = container.querySelector(ELEMENTS_SELECTOR.textToggle);

    if (!hideContent.style.maxHeight) {
      hideContent.style.maxHeight = hideContent.scrollHeight + 50 + 'px';
    } else {
      hideContent.style.maxHeight = null;
    }

    textToggle.textContent = textToggle.textContent === 'Скрыть' ? 'Показать еще' : 'Скрыть';
  });
});
