function cors() {
    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*'); //usually we only put the domain we're servicing not  * for everyone
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

        next();
    };
}

module.exports = { cors }