import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {InstrumentList} from "../../models";
import {InstrumentService} from "../../service";

@Component({
  selector: 'app-instrument-table',
  templateUrl: './instrument-table.component.html',
  styleUrls: ['./instrument-table.component.scss']
})
export class InstrumentTableComponent implements OnInit {

  list: InstrumentList[] = [];
  dataSource = new MatTableDataSource<InstrumentList>;
  displayedColumn: string[] = ['index','instrumentId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private intService: InstrumentService) {
  }

  ngOnInit() {
    this._getInstList();
  }

  private _getInstList(): void{
    this.intService.getInstrument().subscribe((result)=>{
      this.list = result;
      console.log('>>>>',this.list);
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }
}
