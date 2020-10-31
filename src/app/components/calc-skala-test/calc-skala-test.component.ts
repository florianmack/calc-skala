import { Component } from '@angular/core';

import { CalcSkalaService } from '../../services/calc-skala.service';
import { CLASSIFICATION, GRADES } from '../../services/calc-skala';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector: 'app-calc-skala-test',
   templateUrl: './calc-skala-test.component.html',
   styleUrls: ['./calc-skala-test.component.css']
})

export class CalcSkalaTestComponent {
   public classifications = CLASSIFICATION;
   public grades = GRADES;

   public y: number;
   public g1: number;
   public g2: number;
   public g3: number;
   public g4: number;

   constructor(public service: CalcSkalaService,
               public dialog: MatDialog) {
   }

   calcAHS(): string {
      const grade = this.service.calcAHS([this.g1, this.g2, this.g3, this.g4]);
      return grade ? grade.value : '';
   }

   calcStd(): string {
      const grade = this.service.calcStd([this.g1, this.g2, this.g3, this.g4]);
      return grade ? grade.value : '';
   }

   clear(): void {
      this.y = undefined;
      this.g1 = undefined;
      this.g2 = undefined;
      this.g3 = undefined;
      this.g4 = undefined;
   }
}
