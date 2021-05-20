const path = require('path');
const fs = require('fs');

const readQuotes = () => {
  const stream = fs.createReadStream(
    path.join(__dirname, '../', 'quotes.json'),
    {
      encoding: 'utf-8',
    }
  );

  return new Promise((resolve, reject) => {
    let quotes = [];
    stream
      .on('error', (err) => reject(console.error(err)))
      .on('data', (chunk) => quotes.push(chunk))
      .on('end', () => {
        const quotesArray = JSON.parse(quotes).quotes;
        resolve(quotesArray);
      });
  });
};

module.exports = { readQuotes };
