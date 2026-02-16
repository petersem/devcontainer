import fs from  'fs';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;




const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Type', 'text/html');
        // Read html file into stream, then send to response object
        const home = fs.createReadStream('./public/home.html');
        home.pipe(res);
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
        // Read html file into stream, then send to response object
        const file = fs.createReadStream('./public/jsdemo.html');
        file.pipe(res);
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