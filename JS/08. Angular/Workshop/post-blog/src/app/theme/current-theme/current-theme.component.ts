import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    // this.route.params.subscribe(data => {
    //   console.log(data['themeId']);
    // });

    const id = this.route.snapshot.params['themeId'];


    this.apiService.getSingleTheme(id).subscribe(theme => {
      this.theme = theme;
    });
  }
}
