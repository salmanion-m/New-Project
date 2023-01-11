import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';

import {ShareModule} from "../share/share.module";
import {ContainerComponent, RoutingFormComponent} from "./components";


@NgModule({
    declarations: [
        RoutingFormComponent,
        ContainerComponent
    ],
    exports: [
        RoutingFormComponent
    ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ShareModule
  ]
})
export class DashbordModule { }
