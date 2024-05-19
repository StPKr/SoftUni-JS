const fs = require('fs');

const data = [1, 2, 3, 4];

// fs.writeFileSync('./data.json', JSON.stringify(data), (err) => {
fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    console.log('Write completed');
});

console.log('Code completed');

// const data = fs.readFileSync('./demo.html');
const data2 = fs.readFile('./demo.html', (err, data2) => {
    if (err != null) {
        //handle error
        console.log('Error encountered', err.message);
        return;
    }

    console.log(data2.toString());
});

let data3 = fs.readdirSync('./', 'utf-8');
console.log('Reading dirs',data3);