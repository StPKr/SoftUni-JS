const { Schema, model, Schema: { Types } } = require('mongoose');

const articleSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'Person'
    }
});

const Article = model('Article', articleSchema);

module.exports = { Article };