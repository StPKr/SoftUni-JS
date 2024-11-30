import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(limit?: number) {

    let url = `/api/posts`;
    if (limit) {
      url += `?limit=${limit}`
    }
    return this.http.get<Post[]>(url);
  }

  getThemes() {
    return this.http.get<Theme[]>(`/api/themes`);
  }

  getBooks() {
    return this.http.get('http://localhost:3030/data/books');
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`/api/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const payload = { themeName, postText };
    return this.http.post<Theme>(`/api/themes`, payload);
  }

  //update http.put
  //delete http.delete
}
