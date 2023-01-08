import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDailyPriceComponent } from './chart-daily-price.component';

describe('ChartDailyPriceComponent', () => {
  let component: ChartDailyPriceComponent;
  let fixture: ComponentFixture<ChartDailyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDailyPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDailyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
