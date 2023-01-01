import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentRoutingModule } from './instrument-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { InstrumentTableComponent } from './components/instrument-table/instrument-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";


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
  ]
})
export class InstrumentModule { }
