import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: `${process.env.SERVER_URL}api`,
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = axios.create(config);

export default api;
