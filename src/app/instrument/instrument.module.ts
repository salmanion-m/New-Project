import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContainerComponent, InstrumentTableComponent} from "./components";
import { InstrumentRoutingModule } from './instrument-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    ContainerComponent,
    InstrumentTableComponent
  ],
  imports: [
    CommonModule,
    InstrumentRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ShareModule,
  ]
})
export class InstrumentModule { }
