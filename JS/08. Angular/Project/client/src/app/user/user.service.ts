import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getJwtFromCookie } from '../utils/jwt.getter';
import { setJwtCookie } from '../utils/jwt.setter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  userSubscription: Subscription | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>(`/api/users/login`, { email, password })
      .pipe(
        tap((user) => {
          if (user && user.accessToken) {
            setJwtCookie(user.accessToken);
            this.user$$.next(user);
          }
          console.log(user.accessToken)
        })
      );
  }



  logout() {
    const jwt = getJwtFromCookie();

    if (jwt) {
      console.log(jwt)
      this.http.get(`/api/users/logout`, {
        headers: {
          'X-Authorization': `${jwt}`,
        }
      }).subscribe(
        () => {
          document.cookie = 'jwt=; path=/; secure; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          this.router.navigate(['/home']);
        }
      );
    } else {
      console.error('No JWT found for logout');
      this.router.navigate(['/home']);
    }
  }

  profileInfo() {
    //TODO add X-Authorization headedr
    return this.http
      .get<UserForAuth>(`/api/users/me`)
      .pipe(tap((user) => this.user$$.next(user)));
  }
}
