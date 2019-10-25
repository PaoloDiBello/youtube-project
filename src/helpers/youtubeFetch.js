
import axios from 'axios';
const KEY = 'AIzaSyCjTmkifMlLZ3-Jt02faEI4hJHzPmzlIpQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})