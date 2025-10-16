import Quote from './Quote.js';

class RandomQuote {
  static async generateQuote() {
    try {
      const url = 'http://localhost:3000/quotes/random-single';
      const response = await fetch(url);
      const quote = await response.json();
      const { id, text, author } = quote;
      const randomQuote = new Quote(id, text, author);
      return randomQuote;
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
