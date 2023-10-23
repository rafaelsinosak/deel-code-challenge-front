import axios from 'axios';

const profile_id = 1;

const api = axios.create({
  baseURL: 'http://localhost:3001',
    headers: {
        profile_id: profile_id
    }
});

export default api;