import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    this.http
      .get('/api/users')
      .subscribe(users => {
        console.log({users});

      });
  }
}
