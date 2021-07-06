// Example 1: serving plain text
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

// callback is called every time there is an HTTP request to our server
// each time you navigate to http://localhost:1337
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});