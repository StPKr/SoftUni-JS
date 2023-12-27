let { load, save } = require('../models/parts');

module.exports = {
    catalog: (req, res) => {
        let products = load();

        res.render('catalog', { products });
    },
    details: (req, res) => {
        let products = load();

        let product = products[req.params.id];

        res.render('details', {
            name: product.name,
            price: product.price.toFixed(2),
            img: product.img
        });
    },
    create: (req, res) => {
        res.render('create');
    },
    createPost: (req, res) => {
        console.log(`Received request to publish data`);
        console.log(req.body);
        let product = {
            name: req.body.productName,
            price: Number(req.body.price),
            img: req.body.img
        };
        let products = load();
        products.push(product);
        save(products);
        res.redirect('/catalog');
    }
};