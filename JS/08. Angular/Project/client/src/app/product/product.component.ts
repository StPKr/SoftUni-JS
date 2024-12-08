import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';
import { TextTrimmerPipe } from '../shared/pipes/text-trimmer.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EpochToDatePipe, TextTrimmerPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
