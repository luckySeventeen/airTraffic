import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {GeoLocationDialogComponent} from './geoLocationDialog/geoLocationDialog';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GeoLocationDialogComponent,
    HomeComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CdkTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GeoLocationDialogComponent]
})
export class AppModule { }
