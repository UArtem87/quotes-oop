import RandomQuote from './RandomQuote.js';
import ApiRandomQuote from './ApiRandomQuote.js';

class RandomQuoteApp {
  constructor() {
    this.btn = document.getElementById('gen-btn');
    this.quote = document.getElementById('quote');
    this.apiBtn = document.getElementById('api-btn');
    this.currentQuote;
    this.init();
  }

  showQuote() {
    this.quote.innerHTML = `<em>"${this.currentQuote.text}"</em><br>${this.currentQuote.author}`;
  }

  async apiRandomQuote() {
    const apiQuote = await ApiRandomQuote.apiRandomQuote();
    this.currentQuote = apiQuote;
    this.showQuote();
  }

  generateRandomQuote() {
    const randomQuote = RandomQuote.generateQuote();
    this.currentQuote = randomQuote;
    this.showQuote();
  }

  init() {
    this.btn.addEventListener('click', () => this.generateRandomQuote());
    this.apiBtn.addEventListener('click', () => this.apiRandomQuote());
  }
}

export default RandomQuoteApp;
