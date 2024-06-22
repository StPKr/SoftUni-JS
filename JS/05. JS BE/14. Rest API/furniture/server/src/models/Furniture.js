const { Schema, model, Types } = require('mongoose');

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Furniture = model('Furniture', furnitureSchema);

module.exports = { Furniture };

