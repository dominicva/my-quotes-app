const fs = require('fs');
const path = require('path');

const createQuote = async function (request, response) {
  const body = await processRequestBody(request);

  const quotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../', 'quotes.json'))
  );
  quotes.quotes.push(body);

  const updatedQuotes = JSON.stringify(quotes, null, 2);

  fs.writeFileSync(path.join(__dirname, '../', 'quotes.json'), updatedQuotes);

  response.statusCode = 200;
  response.end();
};

const processRequestBody = function (request) {
  return new Promise((resolve, reject) => {
    let body = [];
    request
      .on('error', (err) => {
        reject(console.error(err));
      })
      .on('data', (chunk) => body.push(chunk))
      .on('end', () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
};

module.exports = createQuote;
