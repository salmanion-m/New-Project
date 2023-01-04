import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDailyPriceComponent } from './filter-daily-price.component';

describe('FilterDailyPriceComponent', () => {
  let component: FilterDailyPriceComponent;
  let fixture: ComponentFixture<FilterDailyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDailyPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDailyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
