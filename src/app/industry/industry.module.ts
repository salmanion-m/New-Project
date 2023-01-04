import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent, IndustryTableComponent} from "./components";
import {IndustryRoutingModule} from "./industry-routing.module";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations: [
    ContainerComponent,
    IndustryTableComponent
  ],
  imports: [
    CommonModule,
    IndustryRoutingModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ShareModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class IndustryModule { }
