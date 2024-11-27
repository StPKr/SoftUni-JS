import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, map } from 'rxjs';
import { ReducePipe } from './reduce.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReducePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  user = { name: 'Petko', age: 23, grades: [5, 6, 5, 6, 6] };

  sum(acc: number, cur: number): number {
    return acc + cur;
  }

  addProperty() {
    (this.user as any).aaa = 'test123';
    // this.user.grades.push(-5);
    this.user.grades = [...this.user.grades, -5];
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 2000)
  });

  time$ = interval(1000).pipe(map(() => new Date()));
}
