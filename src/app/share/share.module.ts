import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './components/table/table.component';
// import { FilterComponent } from './components/table/filter/filter.component';
import {FilterTableComponent} from './components/table/filter-table/filter-table.component';
import {LayoutComponent} from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {DashbordModule} from "../dashbord/dashbord.module";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    TableComponent,
    // FilterComponent,
    FilterTableComponent,
    LayoutComponent,
    SidebarComponent
  ],
    exports: [
        LayoutComponent,
        SidebarComponent,

    ],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class ShareModule {
}
