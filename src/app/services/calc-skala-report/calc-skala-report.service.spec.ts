import { TestBed, inject } from '@angular/core/testing';
import { FINALGRADES } from '../calc-skala/calc-skala';
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

   // Calculate combination
   /*it('combos', inject([CalcSkalaReportService], (service: CalcSkalaReportService) => {
      let array = [];
      const cnt = 4;
      for (let g4 = 0; g4 <= cnt; g4++) {
         for (let g3 = 0; g3 <= cnt; g3++) {
            for (let g2 = 0; g2 <= cnt; g2++) {
               for (let g1 = 0; g1 <= cnt; g1++) {
                  for (let g0 = 0; g0 <= cnt; g0++) {
                     if ((g4 + g3 + g2 + g1 + g0) === cnt) {
                        array.push({ val: `g4: ${g4}, g3: ${g3}, g2: ${g2}, g1: ${g1}, g0: ${g0}`,
                           grade: service.calcSTD(g4, g3, g2, g1, g0) });
                     }
                  }
               }
            }
         }
      }
      array = array.sort((a, b) => a.grade.key - b.grade.key);
      console.log(array.map(item => `{${item.val}, out: FINALGRADES.find(item => item.key === ${item.grade.key})},\n`));
   }));*/

   const testDataCalcAHS = [
      { g4: 2, g3: 2, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 3, g3: 1, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 4, g3: 0, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      // ----------------------------------------------------------------------------------
      { g4: 9, g3: 6, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 3, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 4, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 2, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 3, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 2, g3: 1, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 3, g3: 0, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      // ----------------------------------------------------------------------------------
      { g4: 9, g3: 4, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 2, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 3, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 1, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 2, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 2, g3: 0, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 2, g3: 1, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 3, g3: 0, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      // ----------------------------------------------------------------------------------
      { g4: 9, g3: 4, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 0, g2: 3, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 4, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 1, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 1, g2: 3, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 2, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 2, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 0, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 0, g2: 3, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 1, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 1, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 2, g3: 0, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 2, g3: 0, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      // ----------------------------------------------------------------------------------
      { g4: 4, g3: 0, g2: 9, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 0, g2: 0, g1: 0, g0: 4, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 1, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 2, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 3, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 4, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 2, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 2, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 2, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 3, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 1, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 1, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 1, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 2, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 2, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 2, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 2, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 3, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 1, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 1, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 1, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 2, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 1, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 1, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 1, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 2, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 2, g3: 0, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 2, g3: 0, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 2, g3: 0, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 2, g3: 1, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 3, g3: 0, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 5) }
   ];
   testDataCalcAHS.forEach(data => {
      it(`#calcAHS: GIVEN: value g4 is <${data.g4}>, g3 is <${data.g3}>, g2 is <${data.g2}>, g1 is <${data.g1}>, g0 is <${data.g0}> \
THEN: value out is <${JSON.stringify(data.out)}>`, inject([CalcSkalaReportService], (service: CalcSkalaReportService) => {
         expect(service.calcAHS(data.g4, data.g3, data.g2, data.g1, data.g0)).toEqual(data.out);
      }));
   });

   const testDataCalcSTD = [
      { g4: 0, g3: 2, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 0, g3: 3, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 0, g3: 3, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 0, g3: 4, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 1, g3: 1, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 1, g3: 2, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 1, g3: 2, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 1, g3: 3, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 2, g3: 0, g2: 2, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 2, g3: 1, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 2, g3: 1, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 2, g3: 2, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 3, g3: 0, g2: 0, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 3, g3: 0, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 3, g3: 1, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 4, g3: 0, g2: 0, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      // ----------------------------------------------------------------------------------
      { g4: 9, g3: 6, g2: 1, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 9, g3: 4, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 1) },
      { g4: 9, g3: 4, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 1) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 0, g2: 3, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 0, g2: 4, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 1, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 1, g2: 3, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 2, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 0, g3: 2, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 0, g2: 2, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 0, g2: 3, g1: 0, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 1, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 1, g3: 1, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 2, g3: 0, g2: 0, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      { g4: 2, g3: 0, g2: 1, g1: 1, g0: 0, out: FINALGRADES.find(item => item.key === 2) },
      // ----------------------------------------------------------------------------------
      { g4: 4, g3: 0, g2: 9, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 2) },
      // ----------------------------------------------------------------------------------
      { g4: 0, g3: 0, g2: 2, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 0, g2: 3, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 1, g2: 1, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 1, g2: 2, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 2, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 3, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 0, g2: 1, g1: 2, g0: 0, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 0, g2: 2, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 1, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 1, g3: 2, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 2, g3: 0, g2: 1, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 2, g3: 1, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 3, g3: 0, g2: 0, g1: 0, g0: 1, out: FINALGRADES.find(item => item.key === 3) },
      { g4: 0, g3: 0, g2: 0, g1: 3, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 0, g1: 4, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 1, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 1, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 2, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 1, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 1, g2: 0, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 1, g2: 1, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 2, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 0, g2: 0, g1: 2, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 0, g2: 0, g1: 3, g0: 0, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 0, g2: 1, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 1, g3: 1, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 2, g3: 0, g2: 0, g1: 1, g0: 1, out: FINALGRADES.find(item => item.key === 4) },
      { g4: 0, g3: 0, g2: 0, g1: 0, g0: 4, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 1, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 0, g1: 2, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 1, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 0, g2: 2, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 0, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 1, g2: 1, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 0, g3: 2, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 0, g0: 3, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 0, g1: 1, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 0, g2: 1, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 1, g3: 1, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) },
      { g4: 2, g3: 0, g2: 0, g1: 0, g0: 2, out: FINALGRADES.find(item => item.key === 5) }
   ];
   testDataCalcSTD.forEach(data => {
      it(`#calcSTD: GIVEN: value g4 is <${data.g4}>, g3 is <${data.g3}>, g2 is <${data.g2}>, g1 is <${data.g1}>, g0 is <${data.g0}> \
THEN: value out is <${JSON.stringify(data.out)}>`, inject([CalcSkalaReportService], (service: CalcSkalaReportService) => {
         expect(service.calcSTD(data.g4, data.g3, data.g2, data.g1, data.g0)).toEqual(data.out);
      }));
   });
});
