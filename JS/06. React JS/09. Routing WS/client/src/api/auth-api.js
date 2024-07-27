import * as request from './requester';

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await request.post(`${BASE_URL}/login`, { email, password });

    return authData;
}