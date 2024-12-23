import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./types/product";
import { getJwtFromCookie } from "./utils/jwt.getter";
import { UserComment } from "./types/comment";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(`/api/data/products`);
    }

    getCommentsByProduct(productId: string) {
        return this.http.get<UserComment[]>(`/api/data/comments`);
    }

    getSingleProduct(id: string) {
        return this.http.get<Product>(`/api/data/products/${id}`);
    }

    getProductsByAuthor(ownerId: string) {
        return this.http.get<Product[]>(`/api/data/products?where=_ownerId%3D%22${ownerId}%22`);
    }

    createProduct(name: string, price: number, image: string, description: string, seller: string, tel: string) {
        const jwt = getJwtFromCookie();
        const payload = { name, price, image, description, seller, tel };
        return this.http.post<Product>('/api/data/products', payload, {
            headers: {
                'X-Authorization': `${jwt} `,
            }
        });
    }

    createComment(productId: string, text: string, author: string) {
        const jwt = getJwtFromCookie();
        const payload = { productId, text, author };
        return this.http.post<UserComment>('/api/data/comments', payload, {
            headers: {
                'X-Authorization': `${jwt} `,
            }
        });
    }

    editProduct(id: string, name: string, price: number, image: string, description: string, seller: string, tel: string) {
        const jwt = getJwtFromCookie();
        const payload = { name, price, image, description, seller, tel };
        return this.http.put<Product>(`/api/data/products/${id}`, payload, {
            headers: {
                'X-Authorization': `${jwt} `,
            }
        });
    }

    deleteProduct(id: string) {
        const jwt = getJwtFromCookie();
        return this.http.delete<Product>(`/api/data/products/${id}`, {
            headers: {
                'X-Authorization': `${jwt} `,
            }
        });
    }
}