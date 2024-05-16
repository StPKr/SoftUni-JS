const { emitter } = require("./emitter");


function start() {
    const data = [1, 2, 3];

    console.log('Publishing data');
    emitter.emit('ping', data);
    emitter.emit('login', {
        user: 'peter',
        password: '123456'
    });
}

module.exports = { start };