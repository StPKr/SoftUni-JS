import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ApiService } from '../apiService';
import { Product } from '../types/product';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  sortOption: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onSortChange(option: string): void {
    this.sortOption = option;
    if (option === 'price') {
      this.products.sort((a: any, b: any) => a.price - b.price);
    } else if (option === 'date') {
      this.products.sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date));
    } else if (option === 'seller') {
      this.products.sort((a: any, b: any) => a.seller.localeCompare(b.seller));
    } else if (option === 'product') {
      this.products.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
  }
}