import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DailyPriceList, FilterDailyPrice} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {DailyService} from "../../services";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-daily-price-table',
  templateUrl: './daily-price-table.component.html',
  styleUrls: ['./daily-price-table.component.scss']
})
export class DailyPriceTableComponent implements OnInit, AfterViewInit{

  filter: FilterDailyPrice = new FilterDailyPrice();
  list: DailyPriceList[]=[];
  dataSource = new MatTableDataSource<DailyPriceList>;
  displayedColumn: string[]=['index','insCode','deven','pclosing'];

  @ViewChild(MatPaginator) paginator : MatPaginator;



  constructor(protected router: Router,
              protected dailyService: DailyService,
              protected fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._getDailyPrice();
  }
  ngAfterViewInit(): void {

  }

  onApplyFilter(filters: any): void {
    console.log('2>>',filters)
    // this.filter = new FilterDailyPrice(filters);
    this.filter = FilterDailyPrice.fromJson(filters);
    console.log('filter',this.filter)
    this._getDailyPrice();
  }


  private _getDailyPrice(): void{
    this.dailyService.getDailyPriceList(this.filter).subscribe((result)=> {
      this.list = result;
      console.log('::::>>>>',this.list);
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }




}
