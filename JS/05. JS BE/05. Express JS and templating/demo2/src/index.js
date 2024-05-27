const express = require('express');
const handlebars = require('express-handlebars');

const { homeController } = require('./controllers/home');
const { catalogController, detailsController } = require('./controllers/catalog');
const { createController, editController } = require('./controllers/parts');

const app = express();
const hbs = handlebars.create({
    extname: 'hbs', //changes default file ext from .handlebars to .hbs
    defaultLayout: 'default' //changes the name of the file in the default layouts folder
});

app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', homeController);
app.get('/catalog', catalogController);
app.get('/catalog/:id', detailsController);
app.get('/create', createController.get);
app.post('/create', createController.post);
app.get('/edit/:id', editController.get);
app.post('/edit/:id', editController.post);

app.get('*', (req, res) => {
    res.render('404');
})
app.listen(3000);