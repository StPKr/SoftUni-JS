import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../types/user';
import { Router, RouterLink } from '@angular/router';
import { EpochToDatePipe } from '../../shared/pipes/epoch-to-date.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [EpochToDatePipe, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = {
    "username": '',
    "email": '',
    "password": '',
    "tel": '',
    "_createdOn": 0,
    "_id": '',
    "accessToken": '',
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.profileInfo().subscribe({
      next: (data) => {
        this.user = data;
      },
      // error: (err) => {
      //   console.error('Error fetching profile information:', err);
      //   this.userService.logout();
      //   this.router.navigate(['/home']);
      // }
    });
  }
}
