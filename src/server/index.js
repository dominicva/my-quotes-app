const fs = require('fs');
const http = require('http');

const PORT = 3000;

const router = function (request, response) {
  const { method, url, headers } = request;

  if (method == 'POST') {
    createQuote(request, response);
  }
};

const createQuote = function (request, response) {
  let body = [];
  request
    .on('error', (err) => console.error(err))
    .on('data', (chunk) => body.push(chunk))
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);

      response.on('error', (err) => console.error(err));
    });

  response.statusCode = 200;
  response.end();
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
