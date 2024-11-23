import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink } from '@angular/router';
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';
import { CommonModule } from '@angular/common';
import { MyStructuralDirective } from '../directives/my-structural.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, MyRouterLinkDirective, CommonModule, MyStructuralDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  randomPercentage = Math.floor(Math.random() * 100);

  widthInPercentage = `${this.randomPercentage}%`;

  isPercentageAbove50 = this.randomPercentage >= 50;

  isShown = true;

  toggleIsShown() {
    this.isShown= !this.isShown
  }
}
