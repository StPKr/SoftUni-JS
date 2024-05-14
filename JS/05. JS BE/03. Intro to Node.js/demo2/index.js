const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello world</h1>
</body>
</html>`

const server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    if (request.url == '/favicon.ico') {
        response.statusCode = 404;
        response.end();
    } else {
        response.writeHead(200, [
            'Content-Type', 'text/html'
        ])
        response.write(html);
        response.end();
    }

});

server.listen(3000);