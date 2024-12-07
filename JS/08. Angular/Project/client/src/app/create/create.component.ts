import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../apiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private apiServeice: ApiService, private router: Router) { }

  addProduct(form: NgForm) {
    if (form.invalid) {
      return
    }
    const { name, price, desc } = form.value;

    this.apiServeice.createProduct(name, price, desc).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }
}
