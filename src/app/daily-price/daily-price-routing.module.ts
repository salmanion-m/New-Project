import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartDailyPriceComponent, ContainerComponent, DailyPriceTableComponent} from "./components";

const routes: Routes = [
  {path: '' , component: ContainerComponent,
  children: [
    {path: 'daily-table' , component: DailyPriceTableComponent},
    {path: 'chart' ,component: ChartDailyPriceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyPriceRoutingModule { }
