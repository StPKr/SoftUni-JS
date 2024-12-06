import { Component, Input } from '@angular/core';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';

@Component({
  selector: 'app-product-chunk',
  standalone: true,
  imports: [EpochToDatePipe],
  templateUrl: './product-chunk.component.html',
  styleUrl: './product-chunk.component.css'
})
export class ProductChunkComponent {
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
