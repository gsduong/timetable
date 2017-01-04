import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication/authentication.service";

@Component({
  selector: 'home',
  providers: [
    AuthenticationService
  ],
  templateUrl: 'app/home/home.component.html',
  styles: [`
    left-panel {
      border: solid 1px;
      height: 780px;
    }
    right-panel {
      height: 780px;
    }
  `]
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
