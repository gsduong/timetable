import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from './authentication/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule }     from './routing/app-routing.module';
import { AuthenticationService } from './authentication/authentication.service';
import { LeftPanelComponent } from "./left-panel/left-panel.component";
import { RightPanelComponent } from "./right-panel/right-panel.component";
import { ListService } from "./left-panel/list.service";
import {Draggable} from "./shared/make-draggable.directive";
import {Droppable} from "./shared/make-droppable.directive";
import {TimeTableService} from "./right-panel/timetable.service";
import {SubjectComponent} from "./subject/subject.component";

@NgModule({
  imports:  [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      LeftPanelComponent,
      RightPanelComponent,
      // MakeDraggable,
      // MakeDroppable
      Draggable,
      Droppable,
      SubjectComponent
  ],
  providers:    [
    AuthenticationService,
    ListService,
    TimeTableService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
