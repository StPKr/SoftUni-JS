import { Product } from "./product";
import { User } from "./user";

export interface Comment {
    "likes": string[],
    "_id": string,
    "text": string,
    "author": User,
    "productId": Product,
    "created_at": string,
    "updatedAt": string,
}