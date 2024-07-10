import axios, { AxiosInstance } from 'axios';

const baseURL: string | undefined = 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
