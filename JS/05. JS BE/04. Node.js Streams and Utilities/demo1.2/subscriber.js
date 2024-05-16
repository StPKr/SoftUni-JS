const { emitter } = require("./emitter");


function start() {
    emitter.on('ping', onMessage);
}

function onMessage(data) {
    console.log('Received message from bus:', data)
}

module.exports = { start };