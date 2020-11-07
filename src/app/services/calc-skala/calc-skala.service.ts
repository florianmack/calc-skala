import { EventEmitter, Injectable } from '@angular/core';
import { CalcSkalaReportService } from '../calc-skala-report/calc-skala-report.service';
import { CalcSkalaTestService } from '../calc-skala-test/calc-skala-test.service';
import { KeyValue } from './calc-skala';

@Injectable()
export class CalcSkalaService {
   public onClear = new EventEmitter<string>();
   public onInfo = new EventEmitter<string>();

   constructor(private testService: CalcSkalaTestService,
               private reportService: CalcSkalaReportService) {
   }

   public calcAHSTest(g: number[]): KeyValue {
      return this.testService.calcAHS(g);
   }

   public calcStdTest(g: number[]): KeyValue {
      return this.testService.calcStd(g);
   }

   public calcAHSReport(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      return this.reportService.calcAHS(g4, g3, g2, g1, g0);
   }

   public calcStdReport(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      return this.reportService.calcStd(g4, g3, g2, g1, g0);
   }
}
