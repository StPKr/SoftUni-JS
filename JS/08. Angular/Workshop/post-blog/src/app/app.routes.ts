import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { AuthGuard } from './gurads/auth.guard';
import { ErrorMessageComponent } from './core/error-message/error-message.component';

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
            { path: ':themeId', component: CurrentThemeComponent, canActivate: [AuthGuard] },
        ]
    },
    {
        path: 'add-theme',
        loadComponent: () =>
            import('./theme/add-theme/add-theme.component').then(
                (c) => c.AddThemeComponent//lazy loading
            ), canActivate: [AuthGuard]
    },

    { path: 'error', component: ErrorMessageComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
