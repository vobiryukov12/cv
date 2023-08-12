const ELEMENTS_SELECTOR = {
  btnUp: document.querySelector('.btn-up')
};

function show () {
  ELEMENTS_SELECTOR.btnUp.classList.remove('btn-up--hide');
}

function hide () {
  ELEMENTS_SELECTOR.btnUp.classList.add('btn-up--hide');
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 400 ? show() : hide();
});

ELEMENTS_SELECTOR.btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
