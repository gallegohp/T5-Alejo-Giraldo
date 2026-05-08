import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCalculadora } from './base-calculadora';

describe('BaseCalculadora', () => {
  let component: BaseCalculadora;
  let fixture: ComponentFixture<BaseCalculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCalculadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCalculadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
