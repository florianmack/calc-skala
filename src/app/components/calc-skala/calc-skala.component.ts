import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalcSkalaService } from 'src/app/services/calc-skala/calc-skala.service';

@Component({
   selector: 'app-calc-skala',
   templateUrl: './calc-skala.component.html',
   styleUrls: ['./calc-skala.component.css']
})

export class CalcSkalaComponent {
   public selectedTab = 'test';

   constructor(public service: CalcSkalaService,
               public dialog: MatDialog) {
   }

   selectedIndexChange(index: number): void {
      this.selectedTab = index === 0 ? 'test' : 'report';
   }

   info(): void {
      this.service.onInfo.emit(this.selectedTab);
   }

   clear(): void {
      this.service.onClear.emit(this.selectedTab);
   }
}
