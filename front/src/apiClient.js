import axios from 'axios';

const BASE_API_URL = 'http://localhost:4040/api/v1';


export const createMeeting = (topic, start_date, end_date) => {
    return axios.post(`${BASE_API_URL}/meetings`, { topic, end_date, start_date }).then(res => String(res.data.zoomId));
};

