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
    // Mindestens zweimal eine 4.0 Bewertung - der Rest ist 3.0
    const list = g.filter(item => item >= 3);
    if (list.length === 4) {
      return list.filter(item => item === 4).length >= 2;
    }
    return false;
  }

  private calcGut(y: number, g: number[]) {
    // Mindestens dreimal 3.0 oder höher - höchstens einmal 2.0
    const list = g.filter(item => item >= 2);
    if (list.length === 4) {
      return list.filter(item => item >= 3).length >= 3;
    }
    return false;
  }

  private calcBefriedigendV(y: number, g: number[]) {
    if (y === 3 || y === 4) {
      // Einmal 1.0 - der Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 1).length === 1) {
        return g.filter(item => item >= 3).length >= 3;
      }
      // Zweimal 2.0 - der Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 2).length === 2) {
        return g.filter(item => item >= 3).length >= 2;
      }
      // Dreimal 2.0 - der Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 2).length === 3) {
        return g.filter(item => item >= 3).length >= 1;
      }
    }
    return false;
  }

  private calcGenuegendV(y: number, g: number[]) {
    if (y === 3 || y === 4) {
      // Einmal 1.0 - der Rest mindestens 2.0 oder höher
      if (g.filter(item => item === 1).length === 1) {
        return g.filter(item => item >= 2).length >= 3;
      }
      // Viermal 2.0
      return g.filter(item => item === 2).length === 4;
    }
    return false;
  }

  private calcBefriedigendG(y: number, g: number[]) {
    if (y === 3 || y === 4) {
      // Zweimal 1.0 - der Rest mindestens 2.0 oder höher
      if (g.filter(item => item === 1).length === 2) {
        return g.filter(item => item >= 2).length >= 2;
      }
      // Dreimal 1.0 - der Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 1).length === 3) {
        return g.filter(item => item >= 3).length >= 1;
      }
    }
    return false;
  }

  private calcGenuegendG(y: number, g: number[]) {
    if (y === 3 || y === 4) {
      // Einmal 0.0 - der Rest mindestens 1.0 oder höher
      if (g.filter(item => item === 0).length === 1) {
        return g.filter(item => item >= 1).length >= 3;
      }
      // Dreimal 1.0 - einmal 2.0 oder höher
      if (g.filter(item => item === 1).length === 3) {
        return g.filter(item => item >= 2).length >= 1;
      }
      // Viermal 1.0
      return g.filter(item => item === 1).length === 4;
    }
    return false;
  }

  private calcNichtGenuegendG(y: number, g: number[]) {
    if (y === 3 || y === 4) {
      // Die Hälfte der Aufgaben ist 0.0
      return g.filter(item => item === 0).length >= 2;
    }
    return false;
  }

  private calcBefriedigend(y: number, g: number[]) {
    if (y === 1 || y === 2) {
      // Mindestens zweimal 2.0 – der Rest 3.0 oder höher
      if (g.filter(item => item === 2).length === 2) {
        return g.filter(item => item >= 3).length >= 2;
      }
      // Dreimal 2.0 - einmal 3.0 oder höher
      if (g.filter(item => item === 2).length === 3) {
        return g.filter(item => item >= 3).length >= 1;
      }
      // Einmal 1.0 – der Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 1).length === 1) {
        return g.filter(item => item >= 3).length >= 3;
      }
      // Viermal 2.0
      return g.filter(item => item === 2).length === 4;
    }
    return false;
  }

  private calcGenuegend(y: number, g: number[]) {
    if (y === 1 || y === 2) {
      // Zweimal 1.0 – der Rest 2.0 oder höher
      if (g.filter(item => item === 1).length === 2) {
        return g.filter(item => item >= 2).length >= 2;
      }
      // Einmal 0.0 – einmal 1.0 - Rest mindestens 2.0 oder höher
      if (g.filter(item => item === 0).length === 1) {
        if (g.filter(item => item === 1).length === 1) {
          return g.filter(item => item >= 2).length >= 2;
        }
      }
      // Einmal 1.0 – der Rest mindestens 2.0 oder höher
      if (g.filter(item => item === 1).length === 1) {
        return g.filter(item => item >= 2).length >= 3;
      }
      // Dreimal 1.0 – Rest mindestens 3.0 oder höher
      if (g.filter(item => item === 1).length === 3) {
        return g.filter(item => item >= 3).length >= 1;
      }
    }
    return false;
  }

  private calcNichtGenuegend(y: number, g: number[]) {
    if (y === 1 || y === 2) {
      // Einmal 0.0 – mindestens zweimal 1.0
      if (g.filter(item => item === 0).length === 1) {
        return g.filter(item => item === 1).length >= 2;
      }
      // Die Hälfte der Aufgaben ist 0.0
      if (g.filter(item => item === 0).length >= 2) {
        return true;
      }
      // Viermal 1.0
      if (g.filter(item => item === 1).length === 4) {
        return true;
      }
      // Dreimal 1.0 – einaml 2.0
      if (g.filter(item => item === 1).length === 3) {
        return g.filter(item => item === 2).length === 1;
      }
    }
    return false;
  }
}
