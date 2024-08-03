import { get, post } from './requester';

const BASE_URL = 'http://localhost:3030/users';

export const login = (email, password) => post(`${BASE_URL}/login`, { email, password });

export const register = (username, email, password) => post(`${BASE_URL}/register`, { username, email, password });

export const logout = () => get(`${BASE_URL}/logout`);
