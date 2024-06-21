const { Router } = require("express");
const { getAll, getById, getByNameAndType } = require("../services/volcano");

//TODO replace with real router according to exasm description
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    res.render('home');
});

homeRouter.get('/catalog', async (req, res) => {
    const volcanoes = await getAll();
    res.render('catalog', { volcanoes });
});

homeRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const volcano = await getById(id);
    if (!volcano) {
        res.render('404');
        return;
    }

    const isOwner = req.user?._id == volcano.author.toString();
    const hasVoted = Boolean(volcano.voteList.find(vote => req.user?._id == vote.toString()));

    res.render('details', { volcano, isOwner, hasVoted });
});

homeRouter.get('/search', async (req, res) => {
    const volcanoes = await getAll();
    res.render('search', { volcanoes });
});

homeRouter.post('/search', async (req, res) => {
    const { search, type } = req.body;
    const foundvolcanoes = await getByNameAndType(search, type);
    const result = foundvolcanoes.length > 0;

    res.render('search', { foundvolcanoes, result, data: req.body });
});

module.exports = { homeRouter }