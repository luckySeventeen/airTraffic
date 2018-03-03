import {Component, OnInit} from '@angular/core';
import {GeoLocationDialogComponent} from '../geoLocationDialog/geoLocationDialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLatitude: number;
  currentLongitude: number;
  glNotSuported = false;

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.glNotSuported = true;
      console.log('not supported by browser');
    }
  }

  private showPosition(position): void {
    this.currentLatitude = position.coords.latitude;
    this.currentLongitude = position.coords.longitude;
    console.log('latitude:', position.coords.latitude, 'longitude:', position.coords.longitude);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(GeoLocationDialogComponent, {
      height: '200px',
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLocation();
    });
  }

  ngOnInit() {
  }

}
