import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { ApiService } from '../apiService';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EpochToDatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: {
    _ownerId: string;
    name: string;
    description: string;
    price: number;
    seller: string;
    _createdOn: number;
    _id: string;
  };
}
