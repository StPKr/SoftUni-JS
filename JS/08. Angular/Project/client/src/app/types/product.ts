import { User } from "./user";

export interface Product {
    "_ownerId": string,
    "name": string,
    "description": string,
    "price": number,
    "seller": string,
    "_createdOn": number,
    "_id": string,
    "updatedAt": string,
    "comments": Comment[],
}

export interface TempProduct {
    name: string;
    price: number;
    description: string;
}