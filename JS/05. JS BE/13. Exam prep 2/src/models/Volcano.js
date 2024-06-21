const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const volcanoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    elevation: {
        type: Number,
        required: true,
    },
    lastEruption: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    typeVolcano: {
        type: String,
        required: true,
        enum: ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield']
    },
    description: {
        type: String,
        required: true,
    },
    voteList: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Volcano = model('Volcano', volcanoSchema);

module.exports = { Volcano };

