import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {

  constructor(private apiService: ApiService) { }

  addTheme(e: Event, themeName: string, postText: string) {
    e.preventDefault();
    console.log({ themeName, postText });
    this.apiService.createTheme(themeName, postText).subscribe(data => {
      console.log(data);
    })
  }
}
