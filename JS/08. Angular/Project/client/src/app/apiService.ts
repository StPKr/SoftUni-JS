import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./types/product";
import { getJwtFromCookie } from "./utils/jwt.getter";


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(`/api/data/products`);
    }

    createProduct(name: string, price: number, description: string, seller: any) {
        //TODO fix the seller:any assignment
        const jwt = getJwtFromCookie();
        const payload = { name, price, description, seller };
        console.log(payload)
        return this.http.post<Product>('/api/data/products', payload, {
            headers: {
                'X-Authorization': `${jwt}`,
            }
        });
    }


}