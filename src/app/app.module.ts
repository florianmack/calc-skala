import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CalcSkalaComponent } from './components/calc-skala/calc-skala.component';
import { CalcSkalaService } from './services/calc-skala.service';
import { InfoSkalaComponent } from './components/info-skala/info-skala.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcSkalaComponent,
    InfoSkalaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [
    CalcSkalaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [InfoSkalaComponent]
})

export class AppModule {
}
