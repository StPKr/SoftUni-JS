import { Component } from '@angular/core';
import { exampleProducts } from '../constants/list-of-products';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = exampleProducts;

  constructor() { }

  ngOnInit(): void { }
}
