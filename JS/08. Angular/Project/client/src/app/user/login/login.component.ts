import { Component } from '@angular/core';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AutoFocusDirective, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm) {
    if (form.invalid) {
      console.log('Invalidd login form');
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
