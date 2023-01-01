import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { FundTableComponent } from './components/fund-table/fund-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ContainerComponent,
    FundTableComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FundRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class FundModule { }
