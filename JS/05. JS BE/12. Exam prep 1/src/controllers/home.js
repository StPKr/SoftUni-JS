const { Router } = require("express");
const { getRecent } = require("../services/stone");

//TODO replace with real router according to exasm description
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
});

module.exports = { homeRouter }