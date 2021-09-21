const zoomApiClient = require('./services/zoomApiClient');

const testZoomApiClient = () => zoomApiClient.createMeeting('test', '2021-11-25T12:02:00Z', 60, 'Europe/Paris').then(console.log).catch(console.error)

module.exports = { testZoomApiClient };