import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { partOfUser, User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api/Auth';
  public isAuth: boolean = false;
  public userId: number = 0;
  public role: string = "";

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user); // שינוי - שולח רק user
  }

  login(credentials: partOfUser): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials);
  }

  saveToken(token: string, user: any) {
    sessionStorage.setItem('adminToken', token);
    sessionStorage.setItem('user', JSON.stringify(user)); // שמירת פרטי המשתמש
  }

  getToken(): string | null {
    return sessionStorage.getItem('adminToken');
  }

  getUser(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('user');
  }
}
