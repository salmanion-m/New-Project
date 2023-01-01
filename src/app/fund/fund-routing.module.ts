import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, FundTableComponent} from "./components";

const routes: Routes = [
  // {path: '' , component: ContainerComponent ,
  // children:[
  //   {path: 'fund-table',component: FundTableComponent}
  // ]},
  {path: 'fund-table',component: FundTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutingModule { }
