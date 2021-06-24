import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginRequest, LoginUser } from '@example-login/api-interfaces';



@Component({
  selector: 'example-login-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  registrationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    repeatPassword: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: (control: AbstractControl) : ValidationErrors | null => {
      const password = control.get('password');
      const repeatPassword = control.get('repeatPassword')

      return password && repeatPassword && password.value === repeatPassword.value ? { identityRevealed: true } : null;
    }
  })

  hide = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.check();
  }

  onLoginSubmit() {
    console.log('login');

    const user: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.authService.login(user)
      .subscribe((res) => {
        console.log(res);
      })
  }

  onRegistrationSubmit() {
    console.log('registration');

  }

}
