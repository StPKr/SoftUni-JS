const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

start();

async function start() {
    const app = express();

    await configDatabase();
    configExpress(app);
    configRoutes(app);

    app.listen(3030, () => {
        console.log('Server started http://localhost:3030');
    });
}