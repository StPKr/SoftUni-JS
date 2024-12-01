import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-chunk',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './product-chunk.component.html',
  styleUrl: './product-chunk.component.css'
})
export class ProductChunkComponent {
  @Input() product!: {
    name: string;
    description: string;
    price: number;
    seller: string;
    date: Date;
  };
}
