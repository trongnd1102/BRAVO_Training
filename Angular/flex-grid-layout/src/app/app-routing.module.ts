import { GridComponent } from './grid/grid.component';
import { FlexComponent } from './flex/flex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'flex', component: FlexComponent },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
