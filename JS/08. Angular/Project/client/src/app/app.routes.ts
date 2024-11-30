import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //*Test component
    { path: 'test', component: TestComponent },
    //*Test component

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
