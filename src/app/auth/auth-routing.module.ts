import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: 'login' ,component: LoginComponent},
  {path: 'register' ,component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
