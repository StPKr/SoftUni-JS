const { Router } = require('express')

const errorRouter = Router();

errorRouter.get('*', (req, res) => {
    res.render('404');
})
module.exports = { errorRouter };