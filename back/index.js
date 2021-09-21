const express = require('express');
const morgan = require('morgan');
const config = require('./config.json');
const zoomApiClient = require('./services/zoomApiClient');
const datetimeFormatter = require('./services/datetimeFormatter');


const app = express();
const BASE_URL = '/api/v1';

app.use(morgan('dev'));
app.use(express.json());

app.get(`${BASE_URL}/health-check`, ((req, res, next) =>
    res.status(200).send({ status: 'ok' })
));

app.post(`${BASE_URL}/meetings`, ((req, res, next) => {
    const data = req.body;
    const formattedData = datetimeFormatter.formatTimeForZoomApi(data.start_date, data.end_date);
    console.log(formattedData);
    zoomApiClient.createMeeting(
        data.topic,
        formattedData.start_time,
        formattedData.duration,
        formattedData.timezone,
    ).then(() => {
        console.log('SUCCESS!');
        res.status(200).send({ status: 'ok' });
    }).catch((e) => {
        console.log(e);
        res.status(500).send({ status: 'failed' });
    });

}));

app.listen(config.express.PORT, () => console.log(`Server running on port ${config.express.PORT}`));