import { api } from "./requester.js";

const BASE_URL = 'http://localhost:3030/';

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
}

async function register(data) {
    return await api.post(BASE_URL + endpoints.register, data);

}
async function login(data) {
    return await api.post(BASE_URL + endpoints.login, data);

}
async function logout() {
    return await api.get(BASE_URL + endpoints.logout);
}

export const userService = {
    register,
    login,
    logout
}