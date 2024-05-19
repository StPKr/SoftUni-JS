const fs = require('fs');

const writer = fs.createWriteStream('./output.txt');

// process.stdin.on('data', (chunk) => {
//     // console.log('>>>>', chunk.toString());!
//     writer.write(chunk.toString());
// });

process.stdin.pipe(writer); 