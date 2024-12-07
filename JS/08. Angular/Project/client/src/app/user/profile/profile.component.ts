import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserForAuth } from '../../types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: UserForAuth | null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.profileInfo().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching profile information:', err);
        this.userService.logout();
        this.router.navigate(['/home']);
      }
    });
  }
}
