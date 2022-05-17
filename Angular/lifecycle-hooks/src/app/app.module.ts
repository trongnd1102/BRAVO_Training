import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './content-child/student/student.component';
import { StudentDetailComponent } from './content-child/student-detail/student-detail.component';
import { StudentHistoryComponent } from './content-child/student-history/student-history.component';
import { InputsComponent } from './custom-control/inputs/inputs.component';
import { FormsComponent } from './custom-control/forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { EventListenerComponent } from './event-listener/event-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentHistoryComponent,
    InputsComponent,
    FormsComponent,
    EventListenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
