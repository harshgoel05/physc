import axios from 'axios';
import { BASE_URL } from '../constants';

export async function loginUser(body: any) {
  const { data } = await axios.post(BASE_URL + '/users/login', body);
  return data;
}

export async function signupUser(body: any) {
  const { data } = await axios.post(BASE_URL + '/users/create', body);
  return data;
}
