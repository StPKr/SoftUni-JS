const { database } = require('./database');

function getAll() {
    return Object.values(database);
}

function getById(id) {
    return database[id];
}

function createEntry(data) {
    const record = {
        _id: Object.values(database).length,
        name: data.name,
        age: data.age
    };

    database[data._id] = data;

    return data;
}

function update(id, data) {
    const record = database[id];

    if (!record) {
        return
    }

    record.name = data.name;
    record.age = data.age;

    return record;
}

function deleteById(id) {
    const record = database[id];

    if (!record) {
        return
    }

    delete database[id];

    return record;
}

module.exports = {
    getAll,
    getById,
    createEntry,
    update,
    deleteById
}