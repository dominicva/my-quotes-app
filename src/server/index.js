const http = require('http');

const createQuote = require('./routes/create');
const { queryQuotes } = require('./routes/query');

const PORT = 3000;

const router = async function (request, response) {
  const { method } = request;

  if (method == 'POST') {
    createQuote(request, response);
  }

  if (method == 'GET') {
    const matches = await queryQuotes(request, response);

    response.statusCode = 200;
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    response.setHeader('Content-Type', 'application/json');

    const responseBody = JSON.stringify(matches);
    response.write(responseBody);

    response.end();
  }
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
