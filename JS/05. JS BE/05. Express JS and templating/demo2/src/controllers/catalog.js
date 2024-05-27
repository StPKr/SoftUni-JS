const { getPartById, getParts } = require("../services/parts");

module.exports = {
    catalogController: (req, res) => {
        const parts = getParts();
        res.render('catalog', { parts });
    },
    detailsController: (req, res) => {
        const { id } = req.params;
        const part = getPartById(id);

        if (!part) {
            res.redirect('/404');
        }

        res.render('details', part);
    }
}