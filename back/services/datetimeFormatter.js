const moment = require('moment');
const moment_timezone = require('moment-timezone');

const RECEIVED_FROM_FRONT_FORMAT = 'yyyy-MM-DDTHH:mm:ssZ';
const ZOOM_FORMAT = 'yyyy-MM-DDTHH:mm:ss';

const formatTimeForZoomApi = (start_date, end_date) => {
    const start = moment(start_date, RECEIVED_FROM_FRONT_FORMAT);
    const end = moment(end_date, RECEIVED_FROM_FRONT_FORMAT);

    return {
        start_time: start.format(RECEIVED_FROM_FRONT_FORMAT),
        duration: end.diff(start, 'minutes'),
        timezone: 'UTC',
    }
};

module.exports = {
    formatTimeForZoomApi,
}