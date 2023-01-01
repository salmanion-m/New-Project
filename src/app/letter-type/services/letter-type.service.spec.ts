import { TestBed } from '@angular/core/testing';

import { LetterTypeService } from './letter-type.service';

describe('LetterTypeService', () => {
  let service: LetterTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
