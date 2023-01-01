import {Component, OnInit, ViewChild} from '@angular/core';
import {LetterType} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {LetterTypeService} from "../../services";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-letter-type-table',
  templateUrl: './letter-type-table.component.html',
  styleUrls: ['./letter-type-table.component.scss']
})
export class LetterTypeTableComponent implements OnInit {

  list: LetterType[] = [];
  dataSource = new MatTableDataSource<LetterType>;
  displayedColumn: string[] = ['index','letterTypeId','name','publisherTypeId','letterGroupId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private LetterService: LetterTypeService) {
  }

  ngOnInit(): void {
    this._getLetterTypeList();
  }

  private _getLetterTypeList(): void {
    this.LetterService.getLetterType().subscribe((result) => {
      this.list = result;
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
