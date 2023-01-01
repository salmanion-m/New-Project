import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndustryTableComponent} from "./components";

const routes: Routes = [
  {path: 'industry' , component: IndustryTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryRoutingModule { }
