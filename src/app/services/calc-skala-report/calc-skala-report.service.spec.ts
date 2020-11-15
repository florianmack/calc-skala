import { TestBed, inject } from '@angular/core/testing';
import { CalcSkalaReportService } from './calc-skala-report.service';

describe('CalcSkalaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcSkalaReportService]
    });
  });

  it('should be created', inject([CalcSkalaReportService], (service: CalcSkalaReportService) => {
    expect(service).toBeTruthy();
  }));
});
