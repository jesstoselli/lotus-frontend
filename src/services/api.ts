import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lotus-ba83e.firebaseio.com/',
});

export default api;
