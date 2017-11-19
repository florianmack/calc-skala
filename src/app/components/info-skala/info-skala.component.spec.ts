import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSkalaComponent } from './info-skala.component';

describe('InfoSkalaComponent', () => {
  let component: InfoSkalaComponent;
  let fixture: ComponentFixture<InfoSkalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSkalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSkalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
