import { Users } from './../interface/users';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  constructor() {}
  signin(user: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:3000/login', user);
  }
  signup(user: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:3000/register', user);
  }
}
