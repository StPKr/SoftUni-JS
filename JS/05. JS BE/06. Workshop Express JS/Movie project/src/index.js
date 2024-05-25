const express = require('express');
const { configExpress } = require('./config/express');
const { configHbs } = require('./config/hbs');
const { router } = require('./config/routes');

const PORT = process.env.PORT || 3000;

const app = express();

configHbs(app);
configExpress(app);
app.use(router);

app.listen(PORT);