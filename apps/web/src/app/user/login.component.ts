import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginRequest, LoginUser } from '@example-login/api-interfaces';



@Component({
  selector: 'example-login-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  hide = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.check();
  }

  onSubmit() {

    console.log('submit');

    console.warn(this.loginForm.value);

    const user: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    console.log(user);

    this.authService.login(user)
      .subscribe((res) => {
        console.log(res);
      })


  }


}
