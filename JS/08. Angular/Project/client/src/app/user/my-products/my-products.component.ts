import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../apiService';
import { Product } from '../../types/product';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const ownerId = params['id']; 
      if (ownerId) {
        this.apiService.getProductsByAuthor(ownerId).subscribe(products => {
          this.products = products;
        });
      }
    });
  }
}
