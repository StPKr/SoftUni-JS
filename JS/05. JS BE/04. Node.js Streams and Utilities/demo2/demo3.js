//simulating a stream
const fs = require('fs');

const reader = fs.createReadStream('./demo.html', { highWaterMark: 64 });
let data = '';

reader.on('data', (chunk) => {
    // console.log('>>>', chunk.toString());
    process.stdout.write(chunk.toString());
    // data += chunk;
});

reader.on('end', () => {
    console.log('Finished');
    // console.log(data);
});