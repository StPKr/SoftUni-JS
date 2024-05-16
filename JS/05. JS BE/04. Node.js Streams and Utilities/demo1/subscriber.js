const { subscribe } = require('./bus');

function start() {
    subscribe('ping', onMessage);
}

function onMessage(data) {
    console.log('Received message from bus:', data)
}

module.exports = { start };