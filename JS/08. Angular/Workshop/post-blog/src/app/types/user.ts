export interface User {
    "themes": string[],
    "posts": string[],
    "_id": string,
    "tel": string,
    "email": string,
    "username": string,
    "password": string,
    "created_at": string,
    "updatedAt": string,
    "__v": Number,
}

export interface UserForAuth {
    firstName: string;
    username: string;
    email: string;
    tel: string;
    password: string;
    id: string;
}

export interface ProfileDetails {
    username: string;
    email: string;
    tel: string;
}