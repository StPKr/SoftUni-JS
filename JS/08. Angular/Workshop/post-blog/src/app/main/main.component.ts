import { Component } from '@angular/core';
import { ThemesListComponent } from '../theme/themes-list/themes-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { WelcomeMsggComponent } from "../shared/welcome-msgg/welcome-msgg.component";
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesListComponent, PostsListComponent, WelcomeMsggComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) {

  }
}
