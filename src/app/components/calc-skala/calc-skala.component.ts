import { Component } from '@angular/core';

import { CalcSkalaService } from '../../services/calc-skala.service';
import { YEARS, GRADES } from '../../services/calc-skala';
import { InfoSkalaComponent } from '../info-skala/info-skala.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector: 'app-calc-skala',
   templateUrl: './calc-skala.component.html',
   styleUrls: ['./calc-skala.component.css']
})

export class CalcSkalaComponent {

   public years = YEARS;
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

   info(): void {
      this.dialog.open(InfoSkalaComponent, {
         width: '680px',
         data: { gradeInfo: this.service.info(this.y) }
      });
   }

   clear(): void {
      this.g1 = undefined;
      this.g2 = undefined;
      this.g3 = undefined;
      this.g4 = undefined;
   }
}
