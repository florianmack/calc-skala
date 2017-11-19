import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSkalaComponent } from './calc-skala.component';

describe('CalcSkalaComponent', () => {
  let component: CalcSkalaComponent;
  let fixture: ComponentFixture<CalcSkalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSkalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSkalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
