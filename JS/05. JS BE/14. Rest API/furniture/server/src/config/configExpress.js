const express = require('express');

const { session } = require('../middlewares/session');
const { cors } = require('../middlewares/cors');

const secret = 'cookie secr3t';

function configExpress(app) {
    app.use(cors());
    app.use(session());
    app.use(express.json());
}

module.exports = { configExpress };