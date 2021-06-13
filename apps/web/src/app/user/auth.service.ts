import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '@example-login/api-interfaces';
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

  /*
  login(body: LoginUser): Observable<LoginUser> {

    return this.http.post<LoginUser>(`/api/`)
  }
*/
  getToken() {
    return this.token;
  }
}
