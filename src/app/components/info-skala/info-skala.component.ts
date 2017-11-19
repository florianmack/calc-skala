import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-skala',
  templateUrl: './info-skala.component.html',
  styleUrls: ['./info-skala.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoSkalaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoSkalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
