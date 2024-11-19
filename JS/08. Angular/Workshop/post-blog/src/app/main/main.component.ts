import { Component } from '@angular/core';
import { ThemesListComponent } from '../theme/themes-list/themes-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesListComponent, PostsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
