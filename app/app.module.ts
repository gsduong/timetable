import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from './authentication/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule }     from './routing/app-routing.module';
import { AuthenticationService } from './authentication/authentication.service';
import {LeftPanelComponent} from "./left-panel/left-panel.component";
import {RightPanelComponent} from "./right-panel/right-panel.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, LeftPanelComponent, RightPanelComponent],
  providers:    [
    AuthenticationService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
