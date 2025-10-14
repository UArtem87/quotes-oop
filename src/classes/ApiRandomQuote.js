import Quote from './Quote.js';

class ApiRandomQuote {
  static async apiRandomQuote() {
    try {
      const res = await fetch(
        'https://quoteslate.vercel.app/api/quotes/random'
      );
      const apiQuote = await res.json();

      const { id, quote, author } = apiQuote;
      const randomQuote = new Quote(id, quote, author);
      return randomQuote;
    } catch (error) {
      console.error('Помилка при отриманні цитати з API:', error);
    }
  }
}

export default ApiRandomQuote;
