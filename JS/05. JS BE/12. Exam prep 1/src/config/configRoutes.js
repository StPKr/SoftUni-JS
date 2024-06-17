const { homeRouter } = require("../controllers/home");
const { userRouter } = require("../controllers/user");
const { stoneRouter } = require("../controllers/stone");
const { errorRouter } = require("../controllers/404");

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(stoneRouter);
    app.use(errorRouter);
}

module.exports = { configRoutes }