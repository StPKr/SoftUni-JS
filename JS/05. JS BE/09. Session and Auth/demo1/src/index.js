const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { router } = require('./controller/home');
const { sessionRouter } = require('./controller/session');

const secret = 'super secret'

const app = express();
const hbs = handlebars.create({
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/static', express.static('static'));
app.use(cookieParser(secret));
app.use(session({
    secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(router);
app.use(sessionRouter);

app.listen(3000);