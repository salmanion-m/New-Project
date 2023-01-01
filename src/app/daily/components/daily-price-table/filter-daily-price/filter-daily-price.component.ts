import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FilterTableComponent} from "../../../../share/components/table/filter-table/filter-table.component";
import {DailyPriceList, FilterDailyPrice} from "../../../models";
import {DailyService} from "../../../services";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";

@Component({
  selector: 'app-filter-daily-price',
  templateUrl: './filter-daily-price.component.html',
  styleUrls: ['./filter-daily-price.component.scss']
})
export class FilterDailyPriceComponent extends FilterTableComponent<FilterDailyPrice> implements OnInit{



  constructor(private fb: FormBuilder,
              private dailyService: DailyService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override clearFilter() {
    super.clearFilter(new FilterDailyPrice());
  }

  override applyFilter() {
    let filter : FilterDailyPrice = new FilterDailyPrice();
    filter = this.form.value;
    super.applyFilter(filter);
    console.log('1>>',filter)
  }

  protected override _createForm() {
    this.form = this.fb.group({
      insCode:new FormControl(null)
    })
  }


}
