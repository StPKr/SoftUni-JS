const { verifyToken } = require('../services/token');

function session() {
    return function (req, res, next) {
        const token = req.cookies.token;

        if (token) {
            try {
                const payload = verifyToken(token);
                req.user = payload;
                res.locals.hasUser = true;
            } catch (err) {
                res.clearCookie('token');
            }
        }

        next();
    };
}

module.exports = {
    session
};