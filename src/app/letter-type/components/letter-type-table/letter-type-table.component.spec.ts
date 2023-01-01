import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTypeTableComponent } from './letter-type-table.component';

describe('LetterTypeTableComponent', () => {
  let component: LetterTypeTableComponent;
  let fixture: ComponentFixture<LetterTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterTypeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
