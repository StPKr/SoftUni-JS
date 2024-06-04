const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const { homeController } = require('./controllers/home');
const { loginGet, loginPost } = require('./controllers/auth');


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
app.get('/login', loginGet);
app.post('/login', loginPost);

app.listen(3000, () => console.log('Server started'));