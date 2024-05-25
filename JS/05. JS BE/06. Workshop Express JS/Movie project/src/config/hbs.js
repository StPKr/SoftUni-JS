const handlebars = require('express-handlebars');

function configHbs(app) {
    const hbs = handlebars.create({
        extname: '.hbs'
    });

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
}

module.exports = { configHbs };