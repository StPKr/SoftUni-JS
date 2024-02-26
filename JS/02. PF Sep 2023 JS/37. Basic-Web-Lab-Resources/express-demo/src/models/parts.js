let fs = require('fs');

function load() {
    let data = JSON.parse(fs.readFileSync('./products.json'));

    return data;
};

function save(data) {
    fs.writeFileSync('./products.json', JSON.stringify(data, null, 4));
}

module.exports = {
    load,
    save
}