const { Router } = require("express");
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');

const { create, getById, update, deleteById, likeStone } = require("../services/stone");

const stoneRouter = Router();

stoneRouter.get('/create', isUser(), async (req, res) => {
    res.render('create');
});

stoneRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 chars long!'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category must be at least 3 chars long!'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color must be at least 2 chars long!'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL!'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location must be between 5 and 15 chars long!'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula must be between 3 and 30 chars long!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 chars long!'),

    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, req.user._id);

            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }
    });

stoneRouter.get('/edit/:id', isUser(), async (req, res) => {
    const stone = await getById(req.params.id);


    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == stone.author.toString();

    if (!isOwner) {
        res.redirect('/login');
        return;
    }

    res.render('edit', { data: stone });
});

stoneRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 chars long!'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category must be at least 3 chars long!'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color must be at least 2 chars long!'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL!'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location must be between 5 and 15 chars long!'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula must be between 3 and 30 chars long!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 chars long!'),

    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, req.body, userId);

            res.redirect('/catalog/' + stoneId);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }
    });

stoneRouter.get('/like/:id', isUser(), async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await likeStone(stoneId, userId);

        res.redirect('/catalog/' + stoneId);
    } catch (err) {
        res.redirect('/');
    }
});

stoneRouter.get('/delete/:id', isUser(), async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await deleteById(stoneId, userId);

        res.redirect('/');
    } catch (err) {
        res.redirect('/catalog/' + stoneId);
    }
});
module.exports = { stoneRouter }