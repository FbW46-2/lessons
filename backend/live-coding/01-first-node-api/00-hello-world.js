// minimal Hello world example with Node
require('http')
.createServer((req, res) => res.end('Hello, world!'))
.listen(8080);