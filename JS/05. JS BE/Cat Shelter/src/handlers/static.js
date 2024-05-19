const { readFile } = require("./util");

function staticFileHanlder(req, res) {
    if (req.url.endsWith('.css')) {
        //handle stylesheet
        const data = readFile(req.url);
        res.writeHead(200, [
            'Content-Type', 'text/css'
        ]);
        res.write(data);
        res.end();

        return true;
    } else if (req.url.endsWith('.ico')) {
        //handle favicon
        const data = readFile(req.url);
        res.writeHead(200, [
            'Content-Type', 'image/svg+xml'
        ]);
        res.write(data);
        res.end();

        return true;
    }

    return false;
}

module.exports = {
    staticFileHanlder
}