const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, voteVolcano } = require('../services/volcano');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util');

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), async (req, res) => {


    res.render('create');
});

volcanoRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 chars long!'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 chars long!'),
    body('elevation').trim().isFloat({ min: 0 }).withMessage('Elevation must be more than 0m!'),
    body('year').trim().isFloat({ min: 0, max: 2024 }).withMessage('Year must be between 0 and 2024!'),
    body('IMG').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL!'),
    body('type').trim().custom(value => {
        const allowedTypes = ["Supervolcanoes", "Submarine", "Subglacial", "Mud", "Stratovolcanoes", "Shield"];
        if (!allowedTypes.includes(value)) {
            throw new Error(`Type must be one of the allowed types!`);
        }
        return true;
    }),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 chars long!'),
    async (req, res) => {


        const data = req.body;
        const author = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }
            const record = await create(data, author);

            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data, errors: parseError(err).errors });
        }
    });

volcanoRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const volcano = await getById(id);


    if (!volcano) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == volcano.author.toString();

    if (!isOwner) {
        res.redirect('/login');
        return;
    }

    res.render('edit', { data: volcano });
});

volcanoRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 chars long!'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 chars long!'),
    body('elevation').trim().isFloat({ min: 0 }).withMessage('Elevation must be more than 0m!'),
    body('year').trim().isFloat({ min: 0, max: 2024 }).withMessage('Year must be between 0 and 2024!'),
    body('IMG').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL!'),
    body('type').trim().custom(value => {
        const allowedTypes = ["Supervolcanoes", "Submarine", "Subglacial", "Mud", "Stratovolcanoes", "Shield"];
        if (!allowedTypes.includes(value)) {
            throw new Error(`Type must be one of the allowed types!`);
        }
        return true;
    }),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 chars long!'),
    async (req, res) => {
        const volcanoId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(volcanoId, req.body, userId);

            res.redirect('/catalog/' + volcanoId);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }
    });

volcanoRouter.get('/delete/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await deleteById(volcanoId, userId);

        res.redirect('/catalog');
    } catch (err) {
        res.redirect('/catalog/' + volcanoId);
    }
});

volcanoRouter.get('/vote/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await voteVolcano(volcanoId, userId);

        res.redirect('/catalog/' + volcanoId);
    } catch (err) {
        res.redirect('/');
    }
});

module.exports = { volcanoRouter }