// Example 2: serving JSON
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }));
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});