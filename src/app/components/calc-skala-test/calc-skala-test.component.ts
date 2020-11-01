import { Component, OnDestroy, OnInit } from '@angular/core';

import { CalcSkalaService } from '../../services/calc-skala.service';
import { CLASSIFICATION, GRADEINFO_AHS, GRADEINFO_STD, GRADES } from '../../services/calc-skala';
import { MatDialog } from '@angular/material/dialog';

import { InfoSkalaComponent } from '../info-skala/info-skala.component';

@Component({
   selector: 'app-calc-skala-test',
   templateUrl: './calc-skala-test.component.html',
   styleUrls: ['./calc-skala-test.component.css']
})

export class CalcSkalaTestComponent implements OnInit, OnDestroy {
   public onClearSubscription: any;
   public onInfoSubscription: any;

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

   ngOnInit(): void {
      this.onClearSubscription = this.service.onClear.subscribe(() => this.clear());
      this.onInfoSubscription = this.service.onInfo.subscribe(() => this.info());
   }

   ngOnDestroy(): void {
      this.onClearSubscription.unsubscribe();
      this.onInfoSubscription.unsubscribe();
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
         data: {
            gradeInfoAHS: GRADEINFO_AHS,
            gradeInfoStd: GRADEINFO_STD
         }
      });
   }

   clear(): void {
      this.y = undefined;
      this.g1 = undefined;
      this.g2 = undefined;
      this.g3 = undefined;
      this.g4 = undefined;
   }
}
