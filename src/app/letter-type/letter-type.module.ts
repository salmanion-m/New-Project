import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterTypeRoutingModule } from './letter-type-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { LetterTypeTableComponent } from './components/letter-type-table/letter-type-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    ContainerComponent,
    LetterTypeTableComponent
  ],
  imports: [
    CommonModule,
    LetterTypeRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ShareModule,
  ]
})
export class LetterTypeModule { }
