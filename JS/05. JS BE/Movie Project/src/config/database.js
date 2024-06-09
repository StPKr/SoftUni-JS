const mongoose = require('mongoose');
const { User } = require('../models/User');
const { Movie } = require('../models/Movie');
require('../models/Cast');

const connectionString = 'mongodb://127.0.0.1/movie-magic';

async function configDatabase() {
    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };

