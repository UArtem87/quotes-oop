import RandomQuote from './RandomQuote.js';
import ApiRandomQuote from './ApiRandomQuote.js';
import IsFavorite from './IsFavorite.js';
import Theme from './Theme.js';
import { domElements } from './DOMElements.js';

class RandomQuoteApp {
  constructor() {
    this.btn = domElements.genBtn;
    this.quote = domElements.quote;
    this.apiBtn = domElements.apiBtn;
    this.isFavorite = new IsFavorite('toggle-favorite', () =>
      this.toggleFavorite()
    );
    this.Theme = new Theme(domElements);
    this.favoriteQuotes = {};
    this.currentQuote;
    this.init();
  }

  toggleFavorite() {
    this.currentQuote.isFavorite = !this.currentQuote.isFavorite;
    const id = this.currentQuote.id;
    this.currentQuote.isFavorite
      ? (this.favoriteQuotes[id] = this.currentQuote)
      : delete this.favoriteQuotes[id];
    this.showQuote();
    console.log(this.favoriteQuotes);
  }

  showQuote() {
    const id = this.currentQuote.id;
    const isFav = this.favoriteQuotes[id];
    this.currentQuote.isFavorite = isFav;
    this.quote.innerHTML = `<em>"${this.currentQuote.text}"</em><br>${this.currentQuote.author}`;
    this.isFavorite.showStar(isFav);
  }

  changeCurrentQoute(quote) {
    this.currentQuote = quote;
    this.showQuote();
  }

  async apiRandomQuote() {
    const apiQuote = await ApiRandomQuote.apiRandomQuote();
    this.changeCurrentQoute(apiQuote);
  }

  async generateRandomQuote() {
    const randomQuote = await RandomQuote.generateQuote();
    this.changeCurrentQoute(randomQuote);
  }

  init() {
    this.btn.addEventListener('click', () => this.generateRandomQuote());
    this.apiBtn.addEventListener('click', () => this.apiRandomQuote());
  }
}

export default RandomQuoteApp;
