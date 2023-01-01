import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Fund} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {FundService} from "../../services";


@Component({
  selector: 'app-fund-table',
  templateUrl: './fund-table.component.html',
  styleUrls: ['./fund-table.component.scss']
})
export class FundTableComponent implements OnInit, AfterViewInit {

  fund: Fund[] = [];
  dataSource = new MatTableDataSource<Fund>;
  displayedColumn: string[] = ['index', 'id', 'cfundId', 'instituteTypeId', 'instituteType', 'instituteKind', 'seoregisterNo', 'ceo'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private fundService: FundService) {
  }


  ngOnInit(): void {
    this._getFund();
  }

  ngAfterViewInit(): void {

  }

  private _getFund(): void {
    this.fundService.getFundList().subscribe((result) => {
      this.fund = result;
      this.dataSource = new MatTableDataSource(this.fund);
      this.dataSource.paginator = this.paginator;
    })
  }


}
