import express from 'express';
import config from './config.js';
import db from './db.js';
import {relations} from './models/index.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

db.sync().then(
    relations()
).then(() => {

    console.log('Conectado a MySQL');

    app.listen(config.SERVER_PORT, () => {
        console.log(`Server en puerto: ${config.SERVER_PORT}`)
    });

}).catch((error) => {
    console.log('Error de conexion a MySQL: ', error);
})
