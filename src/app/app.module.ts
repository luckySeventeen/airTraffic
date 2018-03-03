import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {GeoLocationDialogComponent} from './geoLocationDialog/geoLocationDialog';


@NgModule({
  declarations: [
    AppComponent,
    GeoLocationDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GeoLocationDialogComponent]
})
export class AppModule { }
