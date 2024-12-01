import { Component, OnInit } from '@angular/core';
import { exampleProducts } from '../constants/list-of-products';
import { ProductChunkComponent } from "../product-chunk/product-chunk.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductChunkComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  latestProducts: any = [];

  constructor() { }

  ngOnInit(): void {
    this.latestProducts = exampleProducts
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .slice(0, 5);
  }
}
