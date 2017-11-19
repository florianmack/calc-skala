import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CalcSkalaService } from '../../services/calc-skala.service';
import { YEARS, GRADES } from '../../services/calc-skala';
import { InfoSkalaComponent } from '../info-skala/info-skala.component';

@Component({
  selector: 'app-calc-skala',
  templateUrl: './calc-skala.component.html',
  styleUrls: ['./calc-skala.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { 'class': 'app-calc-skala-host' },
  encapsulation: ViewEncapsulation.None
})

export class CalcSkalaComponent implements OnInit {

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

  ngOnInit() {
  }

  calc(y, g1, g2, g3, g4) {
    const grade = this.service.calc(y, [g1, g2, g3, g4]);
    return grade ? grade.value : '';
  }

  info() {
    this.dialog.open(InfoSkalaComponent, {
      width: '680px',
      data: { gradeInfo: this.service.info(this.y) }
    });
  }

  clear() {
    this.g1 = undefined;
    this.g2 = undefined;
    this.g3 = undefined;
    this.g4 = undefined;
  }
}
