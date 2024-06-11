const express = require('express');
const handlebars = require('express-handlebars');
const { router } = require('./controllers/home');

const app = express();

const hbs = handlebars.create({
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => console.log('Server started http://localhost:3000'));