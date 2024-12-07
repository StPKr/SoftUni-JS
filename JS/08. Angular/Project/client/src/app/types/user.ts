export interface User {
    "email": string,
    "username": string,
    "password": string,
    "tel": number,
    "_createdOn": string,
    "_id": string,
    "accessToken": string,
}

export interface UserForAuth {
    username: string;
    email: string;
    contact: string;
    password: string;
    _id: string;
    accessToken: string;
}