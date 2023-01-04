import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, IndustryTableComponent} from "./components";

const routes: Routes = [
  {path: '' ,component: ContainerComponent,
    children:[
      {path: 'industry-table' ,component: IndustryTableComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryRoutingModule { }
