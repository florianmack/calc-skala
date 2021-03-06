import { Injectable } from '@angular/core';
import { FINALGRADES, KeyValue } from '../calc-skala/calc-skala';

@Injectable()
export class CalcSkalaTestService {
   public calcAHS(g: number[]): KeyValue {
      if (!g || g.filter(item => !Number.isFinite(item)).length > 0) {
         return undefined;
      }
      if (this.calcSehrGutAHS(g)) {
         return FINALGRADES.find(item => item.key === 1);
      } else if (this.calcGutAHS(g)) {
         return FINALGRADES.find(item => item.key === 2);
      } else if (this.calcBefriedigendAHS(g)) {
         return FINALGRADES.find(item => item.key === 3);
      } else if (this.calcGenuegendAHS(g)) {
         return FINALGRADES.find(item => item.key === 4);
      } else {
         return FINALGRADES.find(item => item.key === 5);
      }
   }

   public calcSTD(g: number[]): KeyValue {
      if (!g || g.filter(item => !Number.isFinite(item)).length > 0) {
         return undefined;
      }
      if (this.calcSehrGutAHS(g) || this.calcGutAHS(g) || this.calcBefriedigendAHS(g)) {
         return FINALGRADES.find(item => item.key === 1);
      } else if (this.calcGenuegendAHS(g)) {
         return FINALGRADES.find(item => item.key === 2);
      } else if (this.calcBefriedigendSTD(g)) {
         return FINALGRADES.find(item => item.key === 3);
      } else if (this.calcGenuegendSTD(g)) {
         return FINALGRADES.find(item => item.key === 4);
      } else {
         return FINALGRADES.find(item => item.key === 5);
      }
   }

   private calcSehrGutAHS(g: number[]): boolean {
      // 4x >= 3.0 und 2x >= 4.0
      return this.filter(g, 4, 3) && this.filter(g, 2, 4);
   }

   private calcGutAHS(g: number[]): boolean {
      // 4x >= 2.0 und 3x >= 3.0
      return this.filter(g, 4, 2) && this.filter(g, 3, 3);
   }

   private calcBefriedigendAHS(g: number[]): boolean {
      // 4x >= 1.0 und 3x >= 3.0
      if (this.filter(g, 4, 1) && this.filter(g, 3, 3)) {
         return true;
      }
      // 4x >= 2.0 und 1x >= 3.0
      return this.filter(g, 4, 2) && this.filter(g, 1, 3);
   }

   private calcGenuegendAHS(g: number[]): boolean {
      // 4x >= 1.0 und 3x >= 2.0
      return this.filter(g, 4, 1) && this.filter(g, 3, 2);
   }

   private calcBefriedigendSTD(g: number[]): boolean {
      // 2x 1.0 und 2x >= 2.0
      if (this.filter(g, 2, 1, true) && this.filter(g, 2, 2)) {
         return true;
      }
      // 3x 1.0 und 1x >= 3.0
      if (this.filter(g, 3, 1, true) && this.filter(g, 1, 3)) {
         return true;
      }
      // 3x 2.0
      return this.filter(g, 3, 2);
   }

   private calcGenuegendSTD(g: number[]): boolean {
      // 3x 1.0
      return this.filter(g, 3, 1);
   }

   private filter(list: number[], c: number, v: number, e?: boolean): boolean {
      if (e) {
         return list.filter(item => item === v).length === c;
      } else {
         return list.filter(item => item >= v).length >= c;
      }
   }
}
