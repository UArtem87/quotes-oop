const express = require('express');
const quotes = require('./data/quotes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

function generateQuote() {
  const currentIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[currentIndex];
  quote.id = currentIndex;
  return quote;
}

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = generateQuote();
  res.json(randomQuote);
});

app.listen(port, () => {
  console.log(`Quotes API service running on port ${port}`);
});
