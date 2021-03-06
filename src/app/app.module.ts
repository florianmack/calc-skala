import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcSkalaComponent } from './components/calc-skala/calc-skala.component';
import { CalcSkalaTestComponent } from './components/calc-skala-test/calc-skala-test.component';
import { CalcSkalaReportComponent } from './components/calc-skala-report/calc-skala-report.component';

import { CalcSkalaService } from './services/calc-skala/calc-skala.service';
import { CalcSkalaReportService } from './services/calc-skala-report/calc-skala-report.service';
import { CalcSkalaTestService } from './services/calc-skala-test/calc-skala-test.service';

import { InfoSkalaComponent } from './components/info-skala/info-skala.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';


@NgModule({
   declarations: [
      AppComponent,
      CalcSkalaComponent,
      CalcSkalaTestComponent,
      CalcSkalaReportComponent,
      InfoSkalaComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatListModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [
      CalcSkalaService,
      CalcSkalaTestService,
      CalcSkalaReportService
   ],
   bootstrap: [AppComponent],
   entryComponents: [InfoSkalaComponent]
})

export class AppModule {
}
