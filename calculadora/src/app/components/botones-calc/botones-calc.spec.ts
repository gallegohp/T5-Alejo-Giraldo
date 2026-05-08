import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesCalc } from './botones-calc';

describe('BotonesCalc', () => {
  let component: BotonesCalc;
  let fixture: ComponentFixture<BotonesCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonesCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
