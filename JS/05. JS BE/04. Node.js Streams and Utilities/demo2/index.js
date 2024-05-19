const fs = require('fs');
const { createServer } = require('http');

createServer((req, res) => {
    if (req.method == 'GET') {
        // const reader = fs.createReadStream('./index.html');
        const index = fs.readFileSync('./index.html');
        res.write(index.toString());

        process.stdin.pipe(res);

        setTimeout(()=> res.end(), 10000)
    } else if (req.method == "POST") {
        const writer = fs.createWriteStream('./client_log.txt');
        req.pipe(writer).on('close', () => {
            res.statusCode = 204;
            res.end();
        });

    }
}).listen(3000);

