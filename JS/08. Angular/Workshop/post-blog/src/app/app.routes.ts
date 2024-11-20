import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ThemesListComponent } from './theme/themes-list/themes-list.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //User routing
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    //Theme routing
    {
        path: 'themes', children: [
            { path: '', component: MainComponent },
            { path: ':themeId', component: CurrentThemeComponent },
        ]
    },
    { path: 'add-theme', component: AddThemeComponent },

    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' },
];
