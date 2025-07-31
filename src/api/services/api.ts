import axios, { AxiosInstance } from 'axios';
import { envConfig } from '@/config/env';

const instance: AxiosInstance = axios.create({
  baseURL: envConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      console.error('Resource not found');
    } else if (error.response?.status >= 500) {
      console.error('Server error');
    }
    return Promise.reject(error);
  }
);

export default instance;
