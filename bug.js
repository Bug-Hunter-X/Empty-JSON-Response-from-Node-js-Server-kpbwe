const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({})); // Sending an empty JSON object
};

const server = http.createServer(requestListener);

server.listen(8080);