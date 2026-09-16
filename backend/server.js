const app = require('./src/app');
const env = require('src/config/env');
const seeAdmin = require('.src/startup/seeAdmin');

async function start() {
    await seeAdmin();

    app.listen(env.port, () => {
        console.log(`Laboratorio API CRUD en ejecucion en http://localhost:${env.port}`);
    });
}

start();
