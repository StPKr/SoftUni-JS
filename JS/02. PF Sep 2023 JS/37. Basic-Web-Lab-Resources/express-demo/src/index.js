let express = require('express');
let handlebars = require('express-handlebars');
let bodyParser = require(`body-parser`);

let homeController = require('../src/controllers/home');
let catalogController = require('../src/controllers/catalog');

let hbs = handlebars.create({
    extname: '.hbs'
});

let app = express();
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));

function loadTemplate(body) {
    let template = fs.readFileSync('./public/template.html').toString();
    return template.replace('%%body%%', body);
};

app.get('/', homeController.home
    // if (counter >= 10) {
    //     res.redirect('/blocked');
    // }
    // else {
    //     res.send(`<h1>Hello world!</h1><a href="/about">About page</a><p>You've visited the page ${counter} times.`);
    // }

    // let page = loadTemplate(`
    // <h1>Hello world!</h1>
    // <p><a href="/catalog">Catalog</a></p>
    // <p>You've visited the page ${counter} times.</p>
    // `);
    // res.send(page); - this without handlebars

);

app.get('/catalog', catalogController.catalog);
app.get('/catalog/:id', catalogController.details);

// app.get('/about', (req, res) => {
//     let page = loadTemplate(`
//     <h1>About page</h1>
//     <a href="/">Home page</a>
//     `);
//     res.send(page);
// });

// app.get('/blocked', (req, res) => {
//     res.send('<h1>Blocked</h1><p>You have visited the page too many times!</p>');
// });


// dynamic method by creating an id param

// app.get('/catalog/2', (req, res) => {
//     res.send('<h1>Catalog</h1><h2>Product 2</h2><a href="/">Home page</a>');
// }); - static method, tedious and bad

app.get('/create', catalogController.create);
app.post('/create', catalogController.createPost);


app.listen(3000);