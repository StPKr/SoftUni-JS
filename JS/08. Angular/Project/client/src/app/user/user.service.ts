import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getJwtFromCookie } from '../utils/jwt.getter';
import { setJwtCookie } from '../utils/jwt.setter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;
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
      .post<User>(`/api/users/login`, { email, password })
      .pipe(
        tap((user) => {
          if (user && user.accessToken) {
            setJwtCookie(user.accessToken);
            this.user$$.next(user);
          }
        }));
  }

  register(username: string, email: string, tel: string, password: string) {
    return this.http
      .post<User>('/api/users/register', { username, email, tel, password })
      .pipe(tap((user) => {
        if (user && user.accessToken) {
          setJwtCookie(user.accessToken);
          this.user$$.next(user);
        }
      }));
  }

  logout() {
    const jwt = getJwtFromCookie();

    if (jwt) {
      this.http.get<User>(`/api/users/logout`, {
        headers: {
          'X-Authorization': `${jwt}`,
        }
      }).pipe(tap((user) => this.user$$.next(user))).subscribe(
        () => {
          document.cookie = 'jwt=; path=/; secure; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          this.router.navigate(['/home']);
        }
      );
    } else {
      console.error('No JWT found for logout');
      this.user$$.next(null);
      this.router.navigate(['/home']);
    }
  }

  profileInfo() {
    const jwt = getJwtFromCookie();

    return this.http
      .get<User>(`/api/users/me`, {
        headers: {
          'X-Authorization': `${jwt}`,
        }
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }
}
