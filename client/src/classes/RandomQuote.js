import quotes from '../data/quotes.js';
import MathUtil from '../utils/MathUtil.js';
import Quote from './Quote.js';

class RandomQuote {
  static generateQuote() {
    const currentIndex = MathUtil.randomInt(quotes.length);
    const { text, author } = quotes[currentIndex];
    const randomQuote = new Quote(currentIndex, text, author);
    return randomQuote;
  }
}

export default RandomQuote;
