import { Component, OnInit } from '@angular/core';
import { exampleProducts } from '../constants/list-of-products';
import { ProductChunkComponent } from "../product-chunk/product-chunk.component";
import { RouterLink } from '@angular/router';
import { Product } from '../types/product';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductChunkComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  latestProducts: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(products => {
      this.latestProducts = products
        .sort((a: Product, b: Product) => b._createdOn - a._createdOn).slice(0, 5);
    });
  }
}
