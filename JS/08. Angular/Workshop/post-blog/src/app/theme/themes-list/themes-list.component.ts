import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent {
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiServece: ApiService) {

  }

  ngOnInit() {
    this.apiServece.getThemes().subscribe(themes => {
      this.themes = themes;
      this.isLoading = false;
    });
  }
}
