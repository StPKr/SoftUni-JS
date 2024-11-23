import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = null;
    }
  }

  login() {
    this.user = {
      firstName: 'Pesho',
      email: 'test.test@email.com',
      phoneNumber: '123-123-123-123',
      password: '1234',
      id: 'asd89123giskad-3dsag',
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

}
