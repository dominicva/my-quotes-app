const fs = require('fs');
const path = require('path');

const http = require('http');

const PORT = 3000;

const router = function (request, response) {
  const { method, url, headers } = request;

  if (method == 'POST') {
    createQuote(request, response);
  }
};

const createQuote = async function (request, response) {
  const body = await processRequestBody(request);

  fs.appendFileSync(path.join(__dirname, 'quotes.json'), body);

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
        resolve(body);
      });
  });
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
