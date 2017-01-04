import { Component } from "@angular/core";
import { AuthenticationService, User } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  providers: [
    AuthenticationService
  ],
  templateUrl: 'app/authentication/login.component.html'
})

export class LoginComponent {
  public user = new User('', '');
  public msg = '';

  constructor (
    private _service: AuthenticationService,
    private _router: Router,
  ) {}
  ngOnInit(){
    if (localStorage.getItem('user') != null) this._router.navigate(['home']);
  }
  login() {
    if (!this._service.login(this.user)) {
      this.msg = "Failed to login!";
    }
  }
}
