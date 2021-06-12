import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginUser } from '@example-login/api-interfaces';



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

  ngOnInit(): void { }

  onSubmit() {


    console.warn(this.loginForm.value);

    /*
    let user: LoginUser = {
      username: this.loginForm
    }

    this.authService.login()
      .subscribe((res) => {
        console.log(res);
      })

     */
  }


}
