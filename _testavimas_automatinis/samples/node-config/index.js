// Importing the built-in 'http' module
const http = require('http');

// Creating a server instance
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Writing the response body
  res.end('Hello, World!\n');
});

// Listening on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:3000/');
});
