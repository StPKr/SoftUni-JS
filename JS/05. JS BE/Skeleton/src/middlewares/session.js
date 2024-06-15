const { verifyToken } = require("../services/jwt");

function session() {
    return function (req, res, next) {
        const token = req.cookies?.token;

        if (token) {
            try {
                const sessionData = verifyToken(token);
                req.user = {
                    email: sessionData.email,
                    id: sessionData.id
                };
                res.local.hasUser = true;
            } catch (err) {
                res.clearCookie('token');
            }
        }

        next();
    };
}

module.exports = { session };