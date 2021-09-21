const express = require('express');
const morgan = require('morgan');
const config = require('./config.json');


const app = express();
const BASE_URL = '/api/v1';

app.use(express.json());

app.get(`${BASE_URL}/health-check`, ((req, res, next) =>
    res.status(200).send({ status: 'ok' })
));

app.listen(config.express.PORT, () => console.log(`Server running on port ${config.express.PORT}`));