import { post } from './request.js';

const host = 'http://localhost:3030/users';

export async function register(email, password, repass) {
    return post(host + '/register', { email, password });
}