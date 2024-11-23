import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    //both not used in this examples
) => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLogged) {
        return true;
    }

    router.navigate(['/home']);
    return false;
}