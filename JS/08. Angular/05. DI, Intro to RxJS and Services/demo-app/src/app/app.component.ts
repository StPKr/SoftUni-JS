import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  appUsers: SimpleUser[] = [
    { name: 'Petko', age: 12 },
    { name: 'Maria', age: 31 },
    { name: 'Kircho', age: 57 },
  ];

  handleClick() {
    this.title = "other";
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };

    this.appUsers.push(user);
    // this.appUsers = [...this.appUsers, user]; !IMPORTANT HACK

    inputName.value = '';
    inputAge.value = '';

    console.log(this.appUsers);

  }
}
