import { TestBed } from '@angular/core/testing';

import { DailyPriceService } from './daily-price.service';

describe('DailyPriceService', () => {
  let service: DailyPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
