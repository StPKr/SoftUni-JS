export default async function requester(method, url, data) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}

export const get = (url, data) => requester('GET', url, data); //same as below
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');