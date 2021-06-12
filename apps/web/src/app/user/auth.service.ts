import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '@example-login/api-interfaces';
import { HttpService } from '@nestjs/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = "/api/auth/"


  private token = "";

  constructor(
    private http: HttpService
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
