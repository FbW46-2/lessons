// Example 5: serving static files
const http = require('http');
const fs = require('fs'); // new
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
    // );
    console.log('req.url is ', req.url);
    let url = `http://${hostname}:${port}${req.url}`;
    console.log('url is ', url);
    let params = (new URL(url)).searchParams;
    console.log('params are ', params);
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

// new
function respondStatic (req, res) {
    const filename = `${__dirname}/public${req.url.split('/static')[1]}`;
    fs.createReadStream(filename)
        .on('error', () => respondNotFound(req, res))
        .pipe(res)
}

// depending on the URL the user enters, the server responds with text,
// json, static files, or with a 404 "Not found" message
const server = http.createServer((req, res) => {
    if (req.url === '/') return respondText(req, res);
    if (req.url === '/json') return respondJson(req, res);
    if (req.url.match(/^\/echo/)) return respondEcho(req, res);
    if (req.url.match(/^\/static/)) return respondStatic(req, res); // new
    respondNotFound(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});