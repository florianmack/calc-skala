import { Component } from '@angular/core';

import { CalcSkalaService } from '../../services/calc-skala.service';
import { GRADEINFO_AHS, GRADEINFO_STD } from '../../services/calc-skala';
import { InfoSkalaComponent } from '../info-skala/info-skala.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector: 'app-calc-skala',
   templateUrl: './calc-skala.component.html',
   styleUrls: ['./calc-skala.component.css']
})

export class CalcSkalaComponent {
   constructor(public service: CalcSkalaService,
               public dialog: MatDialog) {
   }

   info(): void {
      this.service.onInfo.emit();
   }

   clear(): void {
      this.service.onClear.emit();
   }
}
