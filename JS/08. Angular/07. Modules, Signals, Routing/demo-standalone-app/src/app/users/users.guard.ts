import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const isLoggedIn = true;

    if (!isLoggedIn) {
        router.navigate(['/home']);
    }

    return isLoggedIn
};