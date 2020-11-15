import { TestBed, inject } from '@angular/core/testing';
import { FINALGRADES } from '../calc-skala/calc-skala';
import { CalcSkalaTestService } from './calc-skala-test.service';

describe('CalcSkalaTestService', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [CalcSkalaTestService]
      });
   });

   it('should be created', inject([CalcSkalaTestService], (service: CalcSkalaTestService) => {
      expect(service).toBeTruthy();
   }));

   const testDataCalcAHS = [
      {
         in: [4, 4, 4, 4],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 4, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 3, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 4, 4, 2],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 4, 3, 2],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 3, 3, 2],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [3, 3, 3, 2],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 4, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 3, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 3, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 4, 3, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 3, 3, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 3, 3, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [2, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [2, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [4, 3, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [3, 3, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [4, 4, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [3, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [4, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [2, 2, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [3, 2, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [4, 4, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [4, 3, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [3, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [3, 3, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [4, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 2, 2, 3],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 2, 3, 3],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 3, 3, 4],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 3, 4, 4],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [1, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [1, 1, 1, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [2, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [3, 2, 1, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [1, 1, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [2, 2, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [1, 0, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 0, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      }
   ];
   testDataCalcAHS.forEach(data => {
      it(`#calcAHS: GIVEN: value in is <${data.in}> THEN: value out is <${JSON.stringify(data.out)}>`,
         inject([CalcSkalaTestService], (service: CalcSkalaTestService) => {
            expect(service.calcAHS(data.in)).toEqual(data.out);
         }));
   });

   const testDataCalcSTD = [
      {
         in: [4, 4, 4, 4],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 4, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 3, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 4, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 3, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 3, 3, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 3, 3, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 2, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 3, 2, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 3, 2, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 4, 3, 1],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 3, 3, 1],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [4, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [3, 3, 3, 1],
         out: FINALGRADES.find(item => item.key === 1)
      },
      {
         in: [2, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [2, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 3, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [3, 3, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 4, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [3, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [4, 2, 2, 1],
         out: FINALGRADES.find(item => item.key === 2)
      },
      {
         in: [2, 2, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 2, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 4, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 3, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [3, 3, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [4, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 2, 2, 2],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 2, 2, 3],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 2, 3, 3],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 3, 3, 3],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 3, 3, 4],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [0, 3, 4, 4],
         out: FINALGRADES.find(item => item.key === 3)
      },
      {
         in: [1, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [1, 1, 1, 0],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [2, 1, 1, 1],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [3, 2, 1, 0],
         out: FINALGRADES.find(item => item.key === 4)
      },
      {
         in: [1, 1, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [2, 2, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [1, 0, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      },
      {
         in: [0, 0, 0, 0],
         out: FINALGRADES.find(item => item.key === 5)
      }
   ];
   testDataCalcSTD.forEach(data => {
      it(`#calcSTD: GIVEN: value in is <${data.in}> THEN: value out is <${JSON.stringify(data.out)}>`,
         inject([CalcSkalaTestService], (service: CalcSkalaTestService) => {
            expect(service.calcSTD(data.in)).toEqual(data.out);
         }));
   });
});
