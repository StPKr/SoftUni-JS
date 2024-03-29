import { clearUserData, setUserData } from '../util.js';
import { get, post } from './request.js';

//TODO adapt user profile to exam requirement (identity, extra properties, etc.)

const endpoints = {
    login: '/login',
    register: '/users',
    logout: '/logout'
};
export async function login(username, password) {
    const result = await post(endpoints.login, { username, password });
    setUserData(result);
}

export async function register(username, password) {
    const result = await post(endpoints.register, { username, password });
    setUserData(result);
}

export async function logout() {
    const promise = post(endpoints.logout); // calls the promise synch and leaves it
    clearUserData(); // clears the data after the promise is already called

    await promise; // awaits the pending promise to resolve
}

