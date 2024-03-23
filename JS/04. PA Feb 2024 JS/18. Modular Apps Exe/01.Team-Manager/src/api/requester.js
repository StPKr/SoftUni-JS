import { userHelper } from "../common/userHelper.js";

async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    };

    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const accessToken = userHelper.getToken();
    if (accessToken) {
        option.headers['x-authorization'] = accessToken;
    }

    try {
        const response = await fetch(url, option);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        }

        return await response.json();

    } catch (err) {
        alert(err);
        throw new Error(err.message);
    }
}

async function get(url) {
    return await requester('GET', url);
}
async function post(url, data) {
    return await requester('POST', url, data)
}
async function put(url, data) {
    return await requester('PUT', url, data)
}
async function del(url) {
    return await requester('DELETE', url)
}

export const api = {
    get,
    post,
    put,
    del
}