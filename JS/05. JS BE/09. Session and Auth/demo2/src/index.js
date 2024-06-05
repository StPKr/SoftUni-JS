const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');

require('./model/User');

const { homeController } = require('./controllers/home');
const { loginGet, loginPost, logouGet, registerGet, registerPost, details } = require('./controllers/auth');

start();
async function start() {
    await mongoose.connect('mongodb://127.0.0.1/testDB2');

    const app = express();

    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');

    app.use(session({
        secret: 'super secret',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false }
    }));
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));

    app.get('/', homeController);
    app.get('/register', registerGet);
    app.post('/register', registerPost);
    app.get('/login', loginGet);
    app.post('/login', loginPost);
    app.get('/logout', logouGet);
    app.get('/details', details);


    app.listen(3000, () => console.log('Server started'));
}