const mongoose = require('mongoose');
require('../models/Movie');
require('../models/Cast');
require('../models/User');

const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDatabase() {
    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };