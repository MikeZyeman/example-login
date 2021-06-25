import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '@example-login/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { SnackService } from '../_services/snack.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = "/api/auth/"

  private token = "";

  constructor(
    private http: HttpClient,
    private snack: SnackService,
    private router: Router
  ) { }

  login(body: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, body)
      .pipe(
        map((res) => {
          this.token = res.token;
          this.router.navigate(['/']);
          return res;
        }),
        catchError(err => {
          this.snack.loginFailed()
          return of(err)
        })
      )
  }

  getToken () {
    return this.token;
  }

  checkToken(): Observable<any> {
    console.log('check');

    return this.http.get(`${this.apiUrl}check`)
      .pipe(
        map((res) => {
          return res
        }),
        catchError((err) => {
          this.router.navigate(['/login']);
          this.snack.authError();
          return of(err);
        })
      )
  }
}
