import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginUser } from '@example-login/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = "/api/auth/"


  private token = "";

  constructor(
    private http: HttpClient
  ) { }


  login(body: LoginRequest): Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.apiUrl}login`, body)
      .pipe((res) => {
        console.log(res);
        return res;
      })
  }

  getToken() {
    return this.token;
  }

  check() {
    console.log('check');

    this.http.get('/api/check')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
