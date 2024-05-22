const { Router } = require('express');

const catalogRouter = Router();

const catalogHtml = `
<h1>Catalog Page</h1>
<a href ="/">Home</a>
<a href = "/catalog">Catalog</a>
`;

catalogRouter.get('/', (req, res) => {
    res.send(catalogHtml);
});

catalogRouter.get('/:category/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send(catalogHtml + `<h2>${req.params.category}</h2>` + `<p>Item ID ${req.params.productId}</p>`);
});

module.exports = { catalogRouter }