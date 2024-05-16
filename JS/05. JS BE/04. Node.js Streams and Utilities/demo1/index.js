const { start: startSubscriber } = require('./subscriber');
const { start: startSubscriber2, unsub } = require('./sub2');
const { start: startPublisher } = require('./publisher');

function start() {
    startSubscriber();
    startSubscriber2();
    startPublisher();

    unsub();

    startPublisher();

}

start();