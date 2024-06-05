const bcrypt = require('bcrypt');

const plainPass = '123';

async function start() {
    const hash = await bcrypt.hash(plainPass, 10);

    const match = await bcrypt.compare(plainPass, hash);

    console.log(hash, match);
}

start();