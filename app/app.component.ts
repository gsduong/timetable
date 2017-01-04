import { Component } from '@angular/core';
import { LoginComponent } from "./authentication/login.component";
import { HomeComponent } from "./home/home.component";
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
