import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPriceRoutingModule } from './daily-price-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ShareModule} from "../share/share.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {ContainerComponent, DailyPriceTableComponent} from "./components";
import {
  FilterDailyPriceComponent
} from "./components/daily-price-table/filter-daily-price/filter-daily-price.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ContainerComponent,
    DailyPriceTableComponent,
    FilterDailyPriceComponent
  ],
  imports: [
    CommonModule,
    DailyPriceRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ShareModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class DailyPriceModule { }
