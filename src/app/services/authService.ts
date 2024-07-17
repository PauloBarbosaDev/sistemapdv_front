import { AxiosResponse, AxiosError } from 'axios';
import api from './api';

interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

const authService = {
  register: async (
    params: RegisterParams
  ): Promise<AxiosResponse | AxiosError> => {
    const res = await api.post('/auth/register', params).catch(error => {
      if (error.response.status === 400) {
        return error.response;
      }

      return error;
    });

    return res;
  },

  login: async (params: LoginParams) => {
    const res = await api.post('/auth/login', params).catch(error => {
      if (error.response.status === 400 || error.response.status === 401) {
        return error.response;
      }

      return error;
    });

    if (res.status === 200) {
      sessionStorage.setItem('sistemaPDV-token', res.data.token);
    }

    return res;
  },
};

export default authService;
