import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EpochToDatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
