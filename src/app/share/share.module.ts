import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/table/filter/filter.component';
import { FilterTableComponent } from './components/table/filter-table/filter-table.component';



@NgModule({
  declarations: [
    TableComponent,
    FilterComponent,
    FilterTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
