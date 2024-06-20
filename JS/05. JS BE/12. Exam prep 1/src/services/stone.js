const { Stone } = require('../models/Stone');

//TODO replace with real Stone service according to exam description

async function getAll() {
    return Stone.find().lean();
}

async function getByName(param) {
    return Stone.find({ name: new RegExp(param, 'i') }).lean();
}

async function getRecent() {
    return Stone.find().sort({ $natural: -1 }).limit(3).lean();
}

async function getById(id) {
    return Stone.findById(id).lean();
}

async function create(data, authorId) {
    //TODO extract properties from view model
    const record = new Stone({
        name: data.name,
        category: data.category,
        color: data.color,
        image: data.image,
        location: data.location,
        formula: data.formula,
        description: data.description,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Stone.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.category = data.category;
    record.color = data.color;
    record.image = data.image;
    record.location = data.location;
    record.formula = data.formula;
    record.description = data.description;

    await record.save();

    return record;
}

async function likeStone(stoneId, userId) {
    const record = await Stone.findById(stoneId);

    if (!record) {
        throw new ReferenceError('Record not found ' + stoneId);
    }

    if (record.author.toString() == userId) {
        throw new Error('Access denied');
    }

    if (record.likes.find(l => l.toString() == userId)) {
        return;
    }

    record.likes.push(userId);

    await record.save();
}

async function deleteById(id, userId) {
    const record = await Stone.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Stone.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    getByName,
    create,
    update,
    deleteById,
    getRecent,
    likeStone
}