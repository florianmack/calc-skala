import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { CLASSIFICATION, REPORT_GRADEINFO_AHS, REPORT_GRADEINFO_STD } from 'src/app/services/calc-skala/calc-skala';
import { CalcSkalaService } from 'src/app/services/calc-skala/calc-skala.service';
import { InfoSkalaComponent } from '../info-skala/info-skala.component';

@Component({
   selector: 'app-calc-skala-report',
   templateUrl: './calc-skala-report.component.html',
   styleUrls: ['./calc-skala-report.component.css']
})

export class CalcSkalaReportComponent implements OnInit, OnDestroy {
   public onClearSubscription: any;
   public onInfoSubscription: any;

   public classifications = CLASSIFICATION;
   public grades = [];

   public y: number;
   public g4: number;
   public g3: number;
   public g2: number;
   public g1: number;
   public g0: number;

   constructor(public service: CalcSkalaService,
               public dialog: MatDialog) {
   }

   ngOnInit(): void {
      this.onClearSubscription = this.service.onClear.pipe(filter(val => val === 'report')).subscribe(() => this.clear());
      this.onInfoSubscription = this.service.onInfo.pipe(filter(val => val === 'report')).subscribe(() => this.info());

      for (let itr = 0; itr <= 30; itr++) {
         this.grades.push(itr);
      }
   }

   ngOnDestroy(): void {
      this.onClearSubscription.unsubscribe();
      this.onInfoSubscription.unsubscribe();
   }

   calcAHS(): string {
      const grade = this.service.calcAHSReport(this.g4, this.g3, this.g2, this.g1, this.g0);
      return grade ? grade.value : '';
   }

   calcStd(): string {
      const grade = this.service.calcStdReport(this.g4, this.g3, this.g2, this.g1, this.g0);
      return grade ? grade.value : '';
   }

   info(): void {
      this.dialog.open(InfoSkalaComponent, {
         width: '680px',
         data: {
            gradeInfoAHS: REPORT_GRADEINFO_AHS,
            gradeInfoStd: REPORT_GRADEINFO_STD
         }
      });
   }

   clear(): void {
      this.y = undefined;
      this.g0 = undefined;
      this.g1 = undefined;
      this.g2 = undefined;
      this.g3 = undefined;
      this.g4 = undefined;
   }
}
