const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the Homepage!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the About Page');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the Contact Us Page');
    } else if(req.url === '/jsdemo') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <button onclick="alert('Hello from JavaScript!')">Click me!</button>
            </body>
            </html>`
        );
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('DOH!!! Page Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});