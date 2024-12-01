import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'catalog', component: CatalogComponent },

    //User
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //User end
    
    //*Test component
    { path: 'test', component: TestComponent },
    //*Test component end

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
