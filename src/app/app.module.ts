import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcSkalaComponent } from './components/calc-skala/calc-skala.component';
import { CalcSkalaService } from './services/calc-skala.service';
import { InfoSkalaComponent } from './components/info-skala/info-skala.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

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
