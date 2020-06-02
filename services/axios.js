import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-projeto-822.cloudfunctions.net',
});

export default api;
