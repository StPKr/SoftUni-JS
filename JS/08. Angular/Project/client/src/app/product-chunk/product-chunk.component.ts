import { Component, Input } from '@angular/core';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-chunk',
  standalone: true,
  imports: [EpochToDatePipe],
  templateUrl: './product-chunk.component.html',
  styleUrl: './product-chunk.component.css'
})
export class ProductChunkComponent {
  @Input() product!: Product;
}
