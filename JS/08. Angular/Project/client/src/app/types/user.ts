export interface User {
    "email": string,
    "username": string,
    "password": string,
    "tel": string,
    "_createdOn": string,
    "_id": string,
    "accessToken": string,
}

export interface UserForAuth {
    username: string;
    email: string;
    contact: string;
    password: string;
    id: string;
}