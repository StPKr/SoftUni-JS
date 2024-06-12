const { Schema, SchemaTypes: Types, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title must be at least 5 characters long'],
        match: [/^[a-z0-9 ]+$/gi, 'Title may only contain English letters, number and spaces']
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1878,
        max: 2100
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 1000
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?:\/\/.+/
    },
    cast: {
        type: [Types.ObjectId],
        ref: 'Cast',
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

module.exports = { Movie };