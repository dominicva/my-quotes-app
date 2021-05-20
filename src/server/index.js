const http = require('http');
const fs = require('fs');
const path = require('path');

const createQuote = require('./routes/create');
const { readQuotes } = require('./routes/query');

const PORT = 3000;

const queryQuotes = async (request, response) => {
  const { url } = request;
  const query = url.slice(8); // remove '/search/'
  const regex = new RegExp(query, 'i');

  const quotes = await readQuotes();

  const matches = quotes.filter((quote) =>
    regex.test(Object.values(quote).join(','))
  );

  console.log(matches); // the quotes to send back
};

const router = function (request, response) {
  const { method } = request;

  if (method == 'POST') {
    createQuote(request, response);
  }

  if (method == 'GET') {
    queryQuotes(request, response);
  }
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
