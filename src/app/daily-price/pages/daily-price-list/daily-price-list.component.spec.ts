import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPriceListComponent } from './daily-price-list.component';

describe('DailyPriceListComponent', () => {
  let component: DailyPriceListComponent;
  let fixture: ComponentFixture<DailyPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPriceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
