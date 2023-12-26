let http = require('http');
let fs = require('fs');

let pageData = fs.readFileSync('./index.html');

http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200);
    response.write(pageData);
    response.end();
}).listen(3000);