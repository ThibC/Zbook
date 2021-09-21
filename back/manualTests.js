const zoomApiClient = require('./services/zoomApiClient');
const datetimeFormatter = require('./services/datetimeFormatter');


const testZoomApiClient = () => zoomApiClient.createMeeting('test', '2021-11-25T12:02:00Z', 60, 'Europe/Paris').then(console.log).catch(console.error)
const testDatetimeFormatter = (start_date, end_date) => {
    console.log(datetimeFormatter.formatTimeForZoomApi(start_date, end_date));
}


module.exports = { testZoomApiClient, testDatetimeFormatter };