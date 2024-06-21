const { errorRouter } = require("../controllers/404");
const { homeRouter } = require("../controllers/home");
const { userRouter } = require("../controllers/user");
const { volcanoRouter } = require("../controllers/volcano");

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(volcanoRouter);

    app.use(errorRouter);
}

module.exports = { configRoutes }