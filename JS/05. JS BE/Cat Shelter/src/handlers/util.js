const fs = require('fs');
const path = require('path');


function readFile(filePath) {
    const data = fs.readFileSync(path.join('./', filePath));
    return data.toString();
}

module.exports = {
    readFile
}