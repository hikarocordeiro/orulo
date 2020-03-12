import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

export default api;
