import { EventListenerComponent } from './event-listener/event-listener.component';
import { AppComponent } from './app.component';
import { FormsComponent } from './custom-control/forms/forms.component';
import { StudentComponent } from './content-child/student/student.component';
import { ParentComponent } from './components/parent/parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: 'components', component: ParentComponent },
  { path: 'content-child', component: StudentComponent },
  { path: 'custom-control', component: FormsComponent },
  { path: 'event-listener', component: EventListenerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
