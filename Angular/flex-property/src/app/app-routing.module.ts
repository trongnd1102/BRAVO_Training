import { PracticeComponent } from './practice/practice.component';
import { FlexResponsiveComponent } from './flex-responsive/flex-responsive.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: 'flex-container', component: FlexContainerComponent },
  { path: 'flex-items', component: FlexItemsComponent },
  { path: 'flex-responsive', component: FlexResponsiveComponent },
  { path: 'practice', component: PracticeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
