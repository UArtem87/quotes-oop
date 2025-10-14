import RandomQuote from './RandomQuote.js';
import ApiRandomQuote from './ApiRandomQuote.js';
import IsFavorite from './IsFavorite.js';
class RandomQuoteApp {
  constructor() {
    this.btn = document.getElementById('gen-btn');
    this.quote = document.getElementById('quote');
    this.apiBtn = document.getElementById('api-btn');
    this.isFavorite = new IsFavorite('toggle-favorite', () =>
      this.toggleFavorite()
    );
    this.favoriteQuotes = {};
    this.currentQuote;
    this.init();
  }

  toggleFavorite() {
    this.currentQuote.isFavorite = !this.currentQuote.isFavorite;
    const id = this.currentQuote.id;
    this.currentQuote.isFavorite
      ? (this.favoriteQuotes[id] = true)
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

  generateRandomQuote() {
    const randomQuote = RandomQuote.generateQuote();
    this.changeCurrentQoute(randomQuote);
  }

  init() {
    this.btn.addEventListener('click', () => this.generateRandomQuote());
    this.apiBtn.addEventListener('click', () => this.apiRandomQuote());
  }
}

export default RandomQuoteApp;
