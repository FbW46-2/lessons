// Example 4: dynamic responses
const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

function respondText (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hi');
}

function respondJson (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }));
}

function respondNotFound (req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
}

function respondEcho (req, res) {
    // const { input = '' } = querystring.parse(
    //     req.url
    //         .split('?')
    //         .slice(1)
    //         .join('')
    // ); // { input: 'Arty' }
    
    let url = `http://${hostname}:${port}${req.url}`;
    let params = (new URL(url)).searchParams;
    let input = params.get('input');

    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            normal: input,
            shouty: input.toUpperCase(),
            characterCount: input.length,
            backwards: input
                .split('')
                .reverse()
                .join('')
        })
    )
}

// depending on the URL the user enters, the server responds with text,
// json, or with a 404 "Not found" message
const server = http.createServer((req, res) => {
    if (req.url === '/') return respondText(req, res);
    if (req.url === '/json') return respondJson(req, res);
    if (req.url.match(/^\/echo/)) return respondEcho(req, res);
    respondNotFound(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});