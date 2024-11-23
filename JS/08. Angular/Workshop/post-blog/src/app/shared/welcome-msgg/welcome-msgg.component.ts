import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-msgg',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome-msgg.component.html',
  styleUrl: './welcome-msgg.component.css'
})
export class WelcomeMsggComponent {
  @Input('isLoggedIn') isLoggedIn = false;
}
