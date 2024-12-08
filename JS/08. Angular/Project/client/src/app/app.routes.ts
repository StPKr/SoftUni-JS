import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'catalog', children: [
            { path: '', component: CatalogComponent },
            { path: ':productId', component: ProductDetailsComponent },
        ]
    },
    { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

    //*Test component
    { path: 'test', component: TestComponent },
    //*Test component end

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
