import { Component, Input } from '@angular/core';
import { SimpleUser } from '../../types';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input('user') user: SimpleUser | null = null;
}
