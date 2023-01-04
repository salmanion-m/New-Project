import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPriceTableComponent } from './daily-price-table.component';

describe('DailyPriceTableComponent', () => {
  let component: DailyPriceTableComponent;
  let fixture: ComponentFixture<DailyPriceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPriceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
