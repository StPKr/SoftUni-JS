const { Volcano } = require('../models/Volcano');

async function getAll() {
    return Volcano.find().lean();
}

async function getById(id) {
    return Volcano.findById(id).lean();
}

async function create(data, authorId) {
    //TODO extract properties from view model
    const record = new Volcano({
        name: data.name,
        location: data.location,
        elevation: data.elevation,
        lastEruption: data.year,
        image: data.IMG,
        typeVolcano: data.type,
        description: data.description,
        author: authorId

    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Volcano.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.location = data.location;
    record.elevation = data.elevation;
    record.lastEruption = data.year;
    record.image = data.IMG;
    record.typeVolcano = data.type;
    record.description = data.description;

    await record.save();

    return record;
}

async function voteVolcano(volcanoId, userId) {
    const record = await Volcano.findById(volcanoId);

    if (!record) {
        throw new ReferenceError('Record not found ' + volcanoId);
    }

    if (record.author.toString() == userId) {
        throw new Error('Access denied');
    }

    if (record.voteList.find(v => v.toString() == userId)) {
        return;
    }

    record.voteList.push(userId);

    await record.save();
}

async function deleteById(id, userId) {
    const record = await Volcano.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Volcano.findByIdAndDelete(id);
}

async function getByNameAndType(name, type) {
    const filters = {};

    if (name) {
        filters.name = new RegExp(name, 'i');
    }

    if (type) {
        filters.typeVolcano = new RegExp(type, 'i');
    }

    return Volcano.find(filters).lean();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    voteVolcano,
    getByNameAndType
}