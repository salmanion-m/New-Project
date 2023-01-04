import { NestedTreeControl } from '@angular/cdk/tree';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { BehaviorSubject } from 'rxjs';
// @ts-ignore
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;


  constructor() {
  }

  ngOnInit(): void {

  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }





}
