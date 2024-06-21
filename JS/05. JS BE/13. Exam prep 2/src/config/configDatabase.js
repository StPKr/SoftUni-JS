const mongoose = require('mongoose');
require('../models/User');
require('../models/Volcano'); 

async function configDatabase() {
    const connectionString = 'mongodb://127.0.0.1/magmaHaven'

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };