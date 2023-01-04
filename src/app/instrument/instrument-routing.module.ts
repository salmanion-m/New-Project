import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, InstrumentTableComponent} from "./components";

const routes: Routes = [
  {path: '' , component: ContainerComponent,
  children:[
    {path: 'inst-table' , component: InstrumentTableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRoutingModule { }
