import { Component, Input, OnInit } from '@angular/core';
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
  @Input() user!: User;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService) { }

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
    const { name, price, image, description } = form.value;
    const { username, tel } = this.user;

    this.apiService.createProduct(name, price, image, description, username, tel).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }
}
