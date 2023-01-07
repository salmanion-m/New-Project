import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { RoutingFormComponent } from './components/routing-form/routing-form.component';
import { ContainerComponent } from './components/container/container.component';
import {ShareModule} from "../share/share.module";


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
