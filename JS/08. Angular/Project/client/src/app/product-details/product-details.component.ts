import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiService';
import { Product } from '../types/product';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [EpochToDatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product;

  constructor(private userService: UserService, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['productId'];

    this.apiService.getSingleProduct(id).subscribe(product => {
      this.product = product;
    })
  }

}
