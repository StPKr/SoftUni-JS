import { HttpClient } from "@angular/common/http";
import { exampleProducts } from "./constants/list-of-products";


export class ApiService {


    constructor(private http: HttpClient) { }

    getProducts(limit?: number) {
        let products = exampleProducts;
    }
}