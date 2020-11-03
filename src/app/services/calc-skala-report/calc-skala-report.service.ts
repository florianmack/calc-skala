import { Injectable } from '@angular/core';
import { FINALGRADES, KeyValue } from '../calc-skala/calc-skala';

@Injectable()
export class CalcSkalaReportService {
   public calcAHS(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      if (!Number.isFinite(g4) || !Number.isFinite(g3) || !Number.isFinite(g2) || !Number.isFinite(g1) || !Number.isFinite(g0)) {
         return undefined;
      }
      if (this.calcSehrGutAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 1);
      } else if (this.calcGutAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 2);
      } else if (this.calcBefriedigendAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 3);
      } else if (this.calcGenuegendAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 4);
      } else {
         return FINALGRADES.find(item => item.key === 5);
      }
   }

   public calcStd(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      if (!Number.isFinite(g4) || !Number.isFinite(g3) || !Number.isFinite(g2) || !Number.isFinite(g1) || !Number.isFinite(g0)) {
         return undefined;
      }
      if (this.calcSehrGutAHS(g4, g3, g2, g1, g0) || this.calcGutAHS(g4, g3, g2, g1, g0) || this.calcBefriedigendAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 1);
      } else if (this.calcGenuegendAHS(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 2);
      } else if (this.calcBefriedigendStd(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 3);
      } else if (this.calcGenuegendStd(g4, g3, g2, g1, g0)) {
         return FINALGRADES.find(item => item.key === 4);
      } else {
         return FINALGRADES.find(item => item.key === 5);
      }
   }

   private calcSehrGutAHS(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && (g4 / cnt) >= 0.5 && g2 === 0 && g1 === 0 && g0 === 0;
   }

   private calcGutAHS(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && ((g4 + g3) / cnt) >= 0.75 && g1 === 0 && g0 === 0;
   }

   private calcBefriedigendAHS(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && ((g4 + g3) / cnt) >= 0.5 && g1 === 0 && g0 === 0;
   }

   private calcGenuegendAHS(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && ((g4 + g3 + g2) / cnt) >= 0.75 && g0 === 0;
   }

   private calcBefriedigendStd(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && ((((g4 + g3 + g2) / cnt) >= 0.5 && g0 === 0) || ((g4 + g3 + g2) / cnt) >= 0.75);
   }

   private calcGenuegendStd(g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      const cnt = this.count(g4, g3, g2, g1, g0);
      return cnt > 0 && ((g4 + g3 + g2 + g1) / cnt) >= 0.75;
   }

   private count(g4: number, g3: number, g2: number, g1: number, g0: number): number {
      return g4 + g3 + g2 + g1 + g0;
   }
}
