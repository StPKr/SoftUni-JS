const http = require('http');

const { homeHandler } = require('./handlers/home');
const { staticFileHanlder } = require('./handlers/static');

const routes = {
    '/': homeHandler,
    '/index.html': homeHandler
}

http.createServer((req, res) => {
    const route = routes[req.url];
    if (typeof route == 'function') {
        route(req, res);
        return;
    } else if (staticFileHanlder(req, res)) {
        return;
    }
    res.writeHead(404, [
        'Content-Type', 'text/plain'
    ]);
    res.write('404 NOt Found');
    res.end();
}).listen(3000)
