import { Component } from '@angular/core';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AutoFocusDirective, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
