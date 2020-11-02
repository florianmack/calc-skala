import { EventEmitter, Injectable } from '@angular/core';
import { CalcSkalaReportService } from '../calc-skala-report/calc-skala-report.service';
import { CalcSkalaTestService } from '../calc-skala-test/calc-skala-test.service';
import { KeyValue } from './calc-skala';

@Injectable()
export class CalcSkalaService {
   public onClear = new EventEmitter();
   public onInfo = new EventEmitter();

   constructor(private testService: CalcSkalaTestService,
               private reportService: CalcSkalaReportService) {
   }

   public calcAHSTest(g: number[]): KeyValue {
      return this.testService.calcAHS(g);
   }

   public calcStdTest(g: number[]): KeyValue {
      return this.testService.calcStd(g);
   }

   public calcAHSReport(g: number[]): KeyValue {
      return this.reportService.calcAHS(g);
   }

   public calcStdReport(g: number[]): KeyValue {
      return this.reportService.calcStd(g);
   }
}
