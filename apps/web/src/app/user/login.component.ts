import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';



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

  }

}
