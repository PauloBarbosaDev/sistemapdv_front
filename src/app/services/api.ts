import axios, { AxiosInstance } from 'axios';

const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASEURL;

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
