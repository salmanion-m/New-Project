import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContainerComponent, LoginComponent, RegisterComponent} from "./components";
import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    ContainerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule { }
