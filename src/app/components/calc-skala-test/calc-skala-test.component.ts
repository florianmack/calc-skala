import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { CLASSIFICATION, GRADEINFO_AHS, GRADEINFO_STD, GRADES } from 'src/app/services/calc-skala/calc-skala';
import { CalcSkalaService } from 'src/app/services/calc-skala/calc-skala.service';
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
      this.onClearSubscription = this.service.onClear.pipe(filter(val => val === 'test')).subscribe(() => this.clear());
      this.onInfoSubscription = this.service.onInfo.pipe(filter(val => val === 'test')).subscribe(() => this.info());
   }

   ngOnDestroy(): void {
      this.onClearSubscription.unsubscribe();
      this.onInfoSubscription.unsubscribe();
   }

   calcAHS(): string {
      const grade = this.service.calcAHSTest([this.g1, this.g2, this.g3, this.g4]);
      return grade ? grade.value : '';
   }

   calcStd(): string {
      const grade = this.service.calcStdTest([this.g1, this.g2, this.g3, this.g4]);
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
