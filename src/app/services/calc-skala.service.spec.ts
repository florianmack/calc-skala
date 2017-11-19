import { TestBed, inject } from '@angular/core/testing';

import { CalcSkalaService } from './calc-skala.service';

describe('CalcSkalaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcSkalaService]
    });
  });

  it('should be created', inject([CalcSkalaService], (service: CalcSkalaService) => {
    expect(service).toBeTruthy();
  }));
});
