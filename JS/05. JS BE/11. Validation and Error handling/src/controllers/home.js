const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const router = Router();
router.get('/', (req, res) => {
    res.render('home');
});
router.post('/',
    body('email').trim().isEmail().withMessage('Invalid email'),
    body('password').trim().isLength({ min: 5 }).withMessage("Pass must be at least 5 chars long."),
    body('repass').trim().custom((value, { req }) => {
        return value == req.body.password;
    }).withMessage('Passwords don\'t match'),
    (req, res) => {

        const result = validationResult(req);
        const errors = Object.fromEntries(result.errors.map(e => [e.path, e.msg]));

        if (result.errors.length) {
            res.render('home', { data: req.body, errors });
            return;
        }

        res.redirect('/')
    });

module.exports = { router };