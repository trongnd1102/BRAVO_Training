import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'checklist', component: ChecklistComponent },
  { path: 'pie-chart', component: PieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
