const { Cast } = require('../models/Cast');

async function createCast(castData) {
    const cast = new Cast({
        name: castData.name,
        age: castData.age,
        born: castData.born,
        nameInMovie: castData.nameInMovie,
        imageUrl: castData.imageUrl,
        movie: castData.movie
    });

    await cast.save();

    return cast;
}

async function getAllCast() {
    return await Cast.find().lean();
}

module.exports = {
    createCast,
    getAllCast
};