import { Component } from '@angular/core';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AutoFocusDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
