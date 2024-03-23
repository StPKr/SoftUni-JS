import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./request.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}
export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
}

export async function logout() {
    const promise = get(endpoints.logout); // calls the promise synch and leaves it
    clearUserData(); // clears the data after the promise is already called

    await promise; // awaits the pending promise to resolve
}

