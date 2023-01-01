import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent<T> implements OnInit {

  form: FormGroup;
  @Input() loading : boolean = false;
  @Output() onApplyFilter: EventEmitter<T> = new EventEmitter<T>();
  @Output() showFilterEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    this._createForm();
  }

  applyFilter(data: any = null): void{
    if(data) {
      this.onApplyFilter.emit(data);
      return
    }
    this.onApplyFilter.emit(this.form.value);
  }

  clearFilter(model: T): void{
    this.form.reset(model);
    this.applyFilter();
  }

  showFilter(): void {
    this.showFilterEvent.emit();
  }


  protected _createForm(): void {
  }

}
