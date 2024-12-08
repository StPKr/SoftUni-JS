import { Component, Input } from '@angular/core';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';
import { Product } from '../types/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-chunk',
  standalone: true,
  imports: [EpochToDatePipe, RouterLink],
  templateUrl: './product-chunk.component.html',
  styleUrl: './product-chunk.component.css'
})
export class ProductChunkComponent {
  @Input() product!: Product;
}
