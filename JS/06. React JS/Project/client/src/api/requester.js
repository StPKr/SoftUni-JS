import { clearUserData, getUserData } from "../util/userDataHandler.js";

const host = 'http://localhost:3030/jsonstore/book-club/books'

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) { //usually returned by logout
            return response; //this will be '' which can't be taken with json()
        } else {
            return response.json();
        }

    } catch (err) {
        //TODO add custome error handling and visualisation based on exam requirements, if any
        alert(err.message);
        throw err;
    }
}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);