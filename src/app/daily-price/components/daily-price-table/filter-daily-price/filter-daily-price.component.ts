import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FilterTableComponent} from "../../../../share/components/table/filter-table/filter-table.component";
import {DailyPriceList, FilterDailyPrices} from "../../../models";
import {DailyPriceService} from "../../../services";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
  MatFormFieldModule
} from '@angular/material/form-field';


@Component({
  selector: 'app-filter-daily-price',
  templateUrl: './filter-daily-price.component.html',
  styleUrls: ['./filter-daily-price.component.scss'],

})
export class FilterDailyPriceComponent extends FilterTableComponent<FilterDailyPrices> implements OnInit {

  filter: FilterDailyPrices = new FilterDailyPrices();



  constructor(private fb: FormBuilder,
              private dailyService: DailyPriceService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected override _createForm() {
    this.form = this.fb.group({
      insCode:new FormControl(),
      FromDate: new FormControl(),
      ToDate: new FormControl()
    })
  }

  override clearFilter() {
    super.clearFilter(new FilterDailyPrices())
  }

  override applyFilter() {
    this.filter = this.form.value;
    super.applyFilter(this.filter);
    console.log('1>>',this.filter)
  }




}
