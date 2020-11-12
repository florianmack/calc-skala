import { Injectable } from '@angular/core';
import { FINALGRADES, KeyValue } from '../calc-skala/calc-skala';

@Injectable()
export class CalcSkalaReportService {
   public calcAHS(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      if (!Number.isFinite(g4) || !Number.isFinite(g3) || !Number.isFinite(g2) || !Number.isFinite(g1) || !Number.isFinite(g0)) {
         return undefined;
      }
      const cnt = this.count(g4, g3, g2, g1, g0);
      if (cnt > 0) {
         if (this.calcSehrGutAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 1);
         } else if (this.calcGutAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 2);
         } else if (this.calcBefriedigendAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 3);
         } else if (this.calcGenuegendAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 4);
         } else {
            return FINALGRADES.find(item => item.key === 5);
         }
      }
      return undefined;
   }

   public calcStd(g4: number, g3: number, g2: number, g1: number, g0: number): KeyValue {
      if (!Number.isFinite(g4) || !Number.isFinite(g3) || !Number.isFinite(g2) || !Number.isFinite(g1) || !Number.isFinite(g0)) {
         return undefined;
      }
      const cnt = this.count(g4, g3, g2, g1, g0);
      if (cnt > 0) {
         if (this.calcSehrGutAHS(cnt, g4, g3, g2, g1, g0) ||
            this.calcGutAHS(cnt, g4, g3, g2, g1, g0) ||
            this.calcBefriedigendAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 1);
         } else if (this.calcGenuegendAHS(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 2);
         } else if (this.calcBefriedigendStd(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 3);
         } else if (this.calcGenuegendStd(cnt, g4, g3, g2, g1, g0)) {
            return FINALGRADES.find(item => item.key === 4);
         } else {
            return FINALGRADES.find(item => item.key === 5);
         }
      }
      return undefined;
   }

   private calcSehrGutAHS(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 50% 4.0, der Rest nicht weniger als 3.0
      return (this.precent(cnt, g4) >= 0.5 && g2 === 0 && g1 === 0 && g0 === 0) ||
         // Mehr als 50% 4.0, höchstens 7% 2.0, kein 1.0, kein 0.0
         (this.precent(cnt, g4) > 0.5 && this.precent(cnt, g2) <= 0.07 && g1 === 0 && g0 === 0);
   }

   private calcGutAHS(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 2.0
      return (this.precent(cnt, g4, g3) >= 0.75 && g1 === 0 && g0 === 0) ||
         // Mehr als 75% 3.0 oder 4.0, höchstens 7% 1.0, kein 0.0
         (this.precent(cnt, g4, g3) > 0.75 && this.precent(cnt, g1) <= 0.07 && g0 === 0);
   }

   private calcBefriedigendAHS(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 2.0
      return (this.precent(cnt, g4, g3) >= 0.5 && g1 === 0 && g0 === 0) ||
         // Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 1.0
         (this.precent(cnt, g4, g3) >= 0.75 && g0 === 0) ||
         // Mehr als 75% 3.0 oder 4.0, höchstens 7% 0.0
         (this.precent(cnt, g4, g3) > 0.75 && this.precent(cnt, g0) <= 0.07);
   }

   private calcGenuegendAHS(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 1.0
      return (this.precent(cnt, g4, g3) >= 0.5 && g0 === 0) ||
         // Mindestens 75% 2.0 oder höher, Rest nicht weniger als 1.0
         (this.precent(cnt, g4, g3, g2) >= 0.75 && g0 === 0) ||
         // Mehr als 75% 2.0 oder höher, höchstens 7% 0.0
         (this.precent(cnt, g4, g3, g2) > 0.75 && this.precent(cnt, g0) <= 0.07);
   }

   private calcBefriedigendStd(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 50% 2.0 oder höher, Rest nicht weniger als 1.0
      return (this.precent(cnt, g4, g3, g2) >= 0.5 && g0 === 0) ||
         // Mindestens 75% 2.0 oder höher
         (this.precent(cnt, g4, g3, g2) >= 0.75);
   }

   private calcGenuegendStd(cnt: number, g4: number, g3: number, g2: number, g1: number, g0: number): boolean {
      // Mindestens 75% 1.0 oder höher
      return this.precent(cnt, g4, g3, g2, g1) >= 0.75;
   }

   private count(g4: number, g3: number, g2: number, g1: number, g0: number): number {
      return g4 + g3 + g2 + g1 + g0;
   }

   private precent(cnt: number, ...v1: number[]): number {
      return cnt > 0 && v1 && v1.reduce((a, b) => a + b, 0) / cnt;
   }
}
