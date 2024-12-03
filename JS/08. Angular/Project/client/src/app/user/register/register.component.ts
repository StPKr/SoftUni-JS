import { Component } from '@angular/core';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AutoFocusDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
