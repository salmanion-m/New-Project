import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {DailyPriceList, FilterDailyPrices} from "../../models";
import {DailyPriceService} from "../../services";

@Component({
  selector: 'app-daily-price-table',
  templateUrl: './daily-price-table.component.html',
  styleUrls: ['./daily-price-table.component.scss']
})
export class DailyPriceTableComponent implements OnInit {

  filter: FilterDailyPrices = new FilterDailyPrices();
  list: DailyPriceList[]=[];
  dataSource = new MatTableDataSource<DailyPriceList>;
  displayedColumn: string[]=['index','insCode','deven','pclosing','shamsidate'];

  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(protected router: Router,
              protected dailyService: DailyPriceService,
              protected fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._getDailyPrice();
  }


  onApplyFilter(filters: any): void {
    // console.log('2>>',filters)
    // this.filter = new FilterDailyPrice(filters);
    this.filter = FilterDailyPrices.fromJson(filters);
    // console.log('filter',this.filter)
    this._getDailyPrice();
  }

  private _getDailyPrice(): void{
    this.dailyService.getDailyPriceList(this.filter).subscribe((result)=> {
      this.list = result;
      // console.log('::::>>>>',this.list);
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
