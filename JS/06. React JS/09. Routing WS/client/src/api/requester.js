async function requester(method, url, data) {
    const options = {};

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        }
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
        throw result;
    }

    return result;
}

// export const get = requester.bind(null, 'GET'); 
// export const post = requester.bind(null, 'POST');
// export const put = requester.bind(null, 'PUT');
// export const del = requester.bind(null, 'DELETE');

const get = (url, data) => requester('GET', url, data); //same as above
const post = (url, data) => requester('POST', url, data);
const put = (url, data) => requester('PUT', url, data);
const del = (url, data) => requester('DELETE', url, data);

export {
    get,
    post,
    put,
    del
}