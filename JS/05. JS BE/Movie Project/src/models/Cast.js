const { Schema, SchemaTypes: Types, model } = require('mongoose');

const castSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\/.+/
    },
    movie: {
        type: Types.ObjectId,
        ref: 'Movie'
    }
});

const Cast = model('Cast', castSchema);

module.exports = { Cast };