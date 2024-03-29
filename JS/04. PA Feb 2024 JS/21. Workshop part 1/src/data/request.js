import { getUserData } from '../util.js';

const host = 'https://parseapi.back4app.com';
const appId = '0DZFVd6Pwng6N8IpgYsKfCl44kJh4x6XsbjoP9FI';
const apiKey = '2PExPaXdtVJxO5OcUYULmEByrMfIuSUxHoQagDgS';

async function request(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        },
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            // if (response.status == 403) {
            //     clearUserData();
            // }
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

/**
 * @typedef {Object} Pointer
 * @property {string} _type
 * @property {string} className
 * @property {string} objectId
 */