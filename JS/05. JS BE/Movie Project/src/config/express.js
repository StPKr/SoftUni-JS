const { urlencoded, static: staticHandler } = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session');

const secret = 'what a secret';

function configExpress(app) {
    app.use(cookieParser(secret));
    app.use(session());
    app.use(urlencoded({ extended: true }));
    app.use('/static', staticHandler('static'));
}

module.exports = { configExpress };