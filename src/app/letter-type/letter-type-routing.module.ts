import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, LetterTypeTableComponent} from "./components";

const routes: Routes = [
  {path: '' , component: ContainerComponent,
  children:[
    {path: 'letter-table' , component: LetterTypeTableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterTypeRoutingModule { }
