const mongoose = require('mongoose');
require('../models/User');
require('../models/Data'); //TODO import real data model
//TODO import models

async function configDatabase() {
    //TODO set DB name
    const connectionString = 'mongodb://127.0.0.1/skeleton'

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };