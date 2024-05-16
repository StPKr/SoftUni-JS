const { publish } = require('./bus');

function start() {
    const data = [1, 2, 3];

    console.log('Publishing data');
    publish('ping', data);
    publish('login', {
        user: 'peter',
        password: '123456'
    });
}

module.exports = { start };