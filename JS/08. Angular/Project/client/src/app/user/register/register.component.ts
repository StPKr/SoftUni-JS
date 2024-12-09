import { Component } from '@angular/core';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { EmailDirective } from '../../directives/email.directive';
import { TelDirective } from '../../directives/tel.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AutoFocusDirective, RouterLink, FormsModule, EmailDirective, TelDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  register(form: NgForm) {
    if (form.invalid) {
      console.log('Invalidd register form');
      return;
    }

    const { username, email, tel, password, pesho } = form.value;
    if (password !== pesho) {
      form.controls['rePass'].setErrors({ passwordMismatch: true });
      return
    }

    this.userService.register(username, email, tel, password).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

}
