import { User } from "./user";

export interface Product {
    "_ownerId": string,
    "name": string,
    "description": string,
    "price": number,
    "seller": string,
    "date": number,
    "_id": string,
    "updatedAt": string,
    "comments": Comment[],
}