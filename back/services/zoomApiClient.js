const axios = require('axios');
const config = require('../config.json');

const { zoom: { ZOOM_API_BASE_URL, jwt_token } } = config;

const getZoomHeaders = () => ({
    'content-type': 'application/json',
    'authorization': `Bearer ${jwt_token}`,  // TODO: use an API_KEY & SECRET
});

const createMeeting = (topic, start_time, duration, timezone) => {
    return axios.post(`${ZOOM_API_BASE_URL}/users/me/meetings`, {
        topic,
        start_time,
        duration,
        timezone,
    }, { headers: getZoomHeaders() });
}

module.exports = {
    createMeeting
}