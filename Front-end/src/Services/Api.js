import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});
API.interceptors.request.use(
  (config) => {
    console.log('Solicitud enviada: ', config);
    config.headers['x-api-key'] = import.meta.env.VITE_API_KEY;
    return config;
  },
  (error) => {
    console.error('Error en la solicitud: ', error);
    return Promise.reject(error);
  }
);
API.interceptors.response.use((response) => {
  console.log('Respuesta recibida: ', response);
  return response;
});
export default API;
