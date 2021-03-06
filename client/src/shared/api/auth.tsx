import axios from 'axios';
import { BASE_URL } from '../constants';

axios.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});

export async function loginUser(body: any) {
  const { data } = await axios.post(BASE_URL + '/users/login', body);
  return data;
}

export async function signupUser(body: any) {
  const { data } = await axios.post(BASE_URL + '/users/create', body);
  return data;
}

export async function createPost(body: any) {
  const { data } = await axios.post(BASE_URL + '/story/new', body);
  return data;
}
