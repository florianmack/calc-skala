import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalcSkalaService } from 'src/app/services/calc-skala/calc-skala.service';

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
