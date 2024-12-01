import { User } from "./user";

export interface Product {
    "comments": Comment[],
    "_id": string,
    "name": string,
    "description": string,
    "price": string,
    "seller": User,
    "created_at": string,
    "updatedAt": string,
    "__v": Number,
}