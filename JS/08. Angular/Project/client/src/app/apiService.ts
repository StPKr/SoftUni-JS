import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Product } from "./types/product";

const { apiUrl } = environment;
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(`${apiUrl}/data/products`);
    }
}