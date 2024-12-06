import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const { apiUrl } = environment;

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

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>(`${apiUrl}/users/login`, { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }
}
