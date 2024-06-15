const cookieParser = require('cookie-parser');
const express = require('express');
const { session } = require('../middlewares/session');

const secret = 'cookie secr3t';

function configExpress(app) {
    app.use(cookieParser(secret));
    app.use(session());

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
}

module.exports = { configExpress };