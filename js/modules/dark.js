const ELEMENTS_SELECTOR = {
  body: document.body,
  themeBtn: document.querySelector('.theme-btn')
};

let dark = true;

function darkLight () {
  if (!dark) {
    ELEMENTS_SELECTOR.body.className = 'theme-dark';
    ELEMENTS_SELECTOR.themeBtn.classList.remove('theme-btn--dark');
    ELEMENTS_SELECTOR.themeBtn.classList.add('theme-btn--light');
  } else {
    ELEMENTS_SELECTOR.body.className = 'theme-light';
    ELEMENTS_SELECTOR.themeBtn.classList.remove('theme-btn--light');
    ELEMENTS_SELECTOR.themeBtn.classList.add('theme-btn--dark');
  }

  dark = !dark;
}

ELEMENTS_SELECTOR.themeBtn.addEventListener('click', darkLight);
