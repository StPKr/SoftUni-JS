const { Router } = require('express')

const errorRouter = Router();

errorRouter.use('*', (req, res) => {
    res.status(404).render('404'); // Setting status code to 404
});

module.exports = { errorRouter };