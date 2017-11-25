import { Injectable } from '@angular/core';
import {
  KeyValue,
  FINALGRADES,
  GRADEINFO_1_2,
  GRADEINFO_3_4,
  GradeInfo
} from './calc-skala';

@Injectable()
export class CalcSkalaService {

  constructor() {
  }

  public calc(y: number, g: number[]): KeyValue {
    if (!y || !g) {
      return undefined;
    }
    if (g.filter(item => !Number.isFinite(item)).length > 0) {
      return undefined;
    }
    if (this.calcSehrGut(y, g)) {
      return FINALGRADES.find(item => item.key === 1);
    } else if (this.calcGut(y, g)) {
      return FINALGRADES.find(item => item.key === 2);
    } else if (this.calcBefriedigendV(y, g)) {
      return FINALGRADES.find(item => item.key === 3);
    } else if (this.calcGenuegendV(y, g)) {
      return FINALGRADES.find(item => item.key === 4);
    } else if (this.calcBefriedigendG(y, g)) {
      return FINALGRADES.find(item => item.key === 5);
    } else if (this.calcGenuegendG(y, g)) {
      return FINALGRADES.find(item => item.key === 6);
    } else if (this.calcNichtGenuegendG(y, g)) {
      return FINALGRADES.find(item => item.key === 7);
    } else if (this.calcBefriedigend(y, g)) {
      return FINALGRADES.find(item => item.key === 8);
    } else if (this.calcGenuegend(y, g)) {
      return FINALGRADES.find(item => item.key === 9);
    } else if (this.calcNichtGenuegend(y, g)) {
      return FINALGRADES.find(item => item.key === 10);
    }
    return FINALGRADES.find(item => item.key === 0);
  }

  public info(y: number): GradeInfo[] {
    if (y === 1 || y === 2) {
      return GRADEINFO_1_2;
    } else if (y === 3 || y === 4) {
      return GRADEINFO_3_4;
    }
  }

  private calcSehrGut(y: number, g: number[]) {
    // 4x >= 3.0 und 2x >= 4.0
    return this.filter(g, 4, 3) && this.filter(g, 2, 4);
}

  private calcGut(y: number, g: number[]) {
    // 4x >= 2.0 und 3x >= 3.0
    return this.filter(g, 4, 2) && this.filter(g, 3, 3);
  }

  private calcBefriedigendV(y: number, g: number[]) {
    if (y < 3) {
      return false;
    }
    // 4x >= 1.0 und 3x >= 3.0
    if (this.filter(g, 4, 1) && this.filter(g, 3, 3)) {
      return true;
    }
    // 4x >= 2.0 und 1x >= 3.0
    return this.filter(g, 4, 2) && this.filter(g, 1, 3);
  }

  private calcGenuegendV(y: number, g: number[]) {
    if (y < 3) {
      return false;
    }
    // 4x >= 1.0 und 3x >= 2.0
    return this.filter(g, 4, 1) && this.filter(g, 3, 2);
  }

  private calcBefriedigendG(y: number, g: number[]) {
    if (y < 3) {
      return false;
    }
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

  private calcGenuegendG(y: number, g: number[]) {
    if (y < 3) {
      return false;
    }
    // 3x 1.0
    return this.filter(g, 3, 1);
  }

  private calcNichtGenuegendG(y: number, g: number[]) {
    if (y < 3) {
      return false;
    }
    // 2x 0.0
    return this.filter(g, 2, 0);
  }

  private calcBefriedigend(y: number, g: number[]) {
    if (y > 2) {
      return false;
    }
    // 4x >= 2.0
    if (this.filter(g, 4, 2)) {
      return true;
    }
    // 4x >= 1.0 und 3x >= 3.0
    return this.filter(g, 4, 1) && this.filter(g, 3, 3);
  }

  private calcGenuegend(y: number, g: number[]) {
    if (y > 2) {
      return false;
    }
    // 1x 0.0 und 1x >= 1.0 und 2x >= 2.0
    if (this.filter(g, 1, 0, true) && this.filter(g, 1, 1) && this.filter(g, 2, 2)) {
      return true;
    }
    // 4x >= 1.0 und 2x >= 2.0
    if (this.filter(g, 4, 1) && this.filter(g, 2, 2)) {
      return true;
    }
    // 3x 1.0 und 1x >= 3.0
    return this.filter(g, 3, 1, true) && this.filter(g, 1, 3);
  }

  private calcNichtGenuegend(y: number, g: number[]) {
    if (y > 2) {
      return false;
    }
    // 2x >= 0.0
    if (this.filter(g, 2, 0)) {
      return true;
    }
    // 1x 0.0 und 3x >= 1.0
    if (this.filter(g, 1, 0, true) && this.filter(g, 3, 1)) {
      return true;
    }
    // 3x 1.0 und 1x >= 1.0
    return this.filter(g, 3, 1, true) && this.filter(g, 1, 1);
  }

  private filter(list: number[], c: number, v: number, e?: boolean) {
    if (e) {
      return list.filter(item => item === v).length === c;
    } else {
      return list.filter(item => item >= v).length >= c;
    }
  }
}
