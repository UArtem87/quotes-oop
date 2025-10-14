class DOMElements {
  constructor() {
    this.elements = {
      body: document.body,
      container: document.getElementById('container'),
      theme: document.getElementById('theme'),
      pointer: document.getElementById('pointer'),
      quote: document.getElementById('quote'),
      genBtn: document.getElementById('gen-btn'),
      apiBtn: document.getElementById('api-btn'),
    };
  }

  getAll() {
    return this.elements;
  }
}

export const domElements = new DOMElements().getAll();
