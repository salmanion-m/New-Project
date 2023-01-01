import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DailyRoutingModule} from './daily-routing.module';
import {ContainerComponent} from './components/container/container.component';
import {DailyPriceTableComponent} from './components/daily-price-table/daily-price-table.component';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {
  FilterDailyPriceComponent
} from './components/daily-price-table/filter-daily-price/filter-daily-price.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ContainerComponent,
    DailyPriceTableComponent,
    FilterDailyPriceComponent
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class DailyModule {
}
