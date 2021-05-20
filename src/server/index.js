const fs = require('fs');
const http = require('http');

const PORT = 3000;

const router = function (request, response) {
  const { method, url, headers } = request;
  let body = [];
  request
    .on('error', (err) => console.error(err))
    .on('data', (chunk) => body.push(chunk))
    .on('end', () => {
      body = Buffer.concat(body).toString();

      response.on('error', (err) => console.error(err));
    });

  response.statusCode = 200;
  // response.setHeader('Content-Type', 'application/json');

  // const responseBody = { headers, method, url, body };

  // response.write(JSON.stringify(responseBody));
  response.end();
  // response.end(JSON.stringify(responseBody)) produces same result
};

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
