const http = require('http');

const createQuote = require('./routes/createQuote');

const PORT = 3000;

const router = function (request, response) {
  const { method } = request;

  if (method == 'POST') {
    createQuote(request, response);
  }
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
