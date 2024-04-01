const http = require('http');

function handleHomeRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the home page!');
}

function handleAboutRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About us page.\n');
}

function handleNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
}

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        handleHomeRequest(req, res);
    } else if (req.url === '/about') {
        handleAboutRequest(req, res);
    } else {
        handleNotFound(req, res);
    }
});

server.on('request', (req, res) => {
    console.log(`Request received for URL: ${req.url}`);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
