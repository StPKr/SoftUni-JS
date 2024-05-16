let subscribers = {};

function subscribe(type, callback) {
    if (!subscribers[type]) {
        subscribers[type] = [];
    }
    subscribers[type].push(callback);
}

function unsubscribe(type, callback) {
    if (!subscribers[type]) {
        return;
    }

    console.log('Removing subscriber');
    const index = subscribers[type].indexOf(callback);
    subscribers[type].splice(index, 1);
}

function publish(type, message) {
    if (!subscribers[type]) {
        return;
    }
    for (const callback of subscribers[type]) {
        console.log('Dispatching message', type);
        callback(message);
    }
}

module.exports = {
    subscribe,
    publish,
    unsubscribe
}