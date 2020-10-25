import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
   selector: 'app-info-skala',
   templateUrl: './info-skala.component.html'
})
export class InfoSkalaComponent {

   constructor(public dialogRef: MatDialogRef<InfoSkalaComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
   }

   close(): void {
      this.dialogRef.close();
   }
}
