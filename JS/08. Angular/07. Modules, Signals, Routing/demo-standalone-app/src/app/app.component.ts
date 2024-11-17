import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
