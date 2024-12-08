import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../apiService';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  user: User | null = null;

  constructor(private apiServeice: ApiService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.profileInfo().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching profile information:', err);
      }
    });
  }

  addProduct(form: NgForm) {
    if (form.invalid) {
      return
    }
    const { name, price, desc } = form.value;
    const seller = this.user?.username;

    this.apiServeice.createProduct(name, price, desc, seller).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }
}
