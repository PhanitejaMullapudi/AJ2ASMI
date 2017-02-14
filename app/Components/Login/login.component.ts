import { Component } from '@angular/core';
import { LoginMdl } from './loginModel'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/LoginService';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'login',
  templateUrl: `app/Components/Login/login.component.html`
})

export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router)
  { }
  passType: string = "password";
  eyeIcon: string = "glyphicon glyphicon-eye-close"
  model = new LoginMdl("", "");

  onEyeClick() {
    this.passType = this.passType == "text" ? "password" : "text";
    this.eyeIcon = this.passType == "text" ? "glyphicon glyphicon-eye-open" : "glyphicon glyphicon-eye-close";
  }

  validateUser() {
  this.loginService.AuthenticateUser(this.model.email, this.model.password).subscribe(a=>{if(a){this.router.navigate(['/Home'])}});
  }

}