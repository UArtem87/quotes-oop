class Theme {
  constructor(elements) {
    this.elements = elements;
    this.init();
  }

  toggleTheme() {
    Object.values(this.elements).forEach((el) => {
      el.classList.toggle('clicked');
    });
  }

  init() {
    this.elements.theme.addEventListener('click', () => this.toggleTheme());
  }
}

export default Theme;
