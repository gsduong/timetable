import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication/authentication.service";

@Component({
  selector: 'login',
  providers: [
    AuthenticationService
  ],
  template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <p>This is page for time table application</p>
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
  `
})

export class HomeComponent {
  constructor(
    private _service: AuthenticationService
  ) {}
  ngOnInit(){
    this._service.check();
  }
  logout() {
    this._service.logout();
  }
}
