import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GeoLocationDialogComponent} from './geoLocationDialog/geoLocationDialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('not supported by browser');
    }
  };

  public showPosition(position): void {
    console.log('latitude:', position.coords.latitude, 'longitude:', position.coords.longitude);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(GeoLocationDialogComponent, {
      height: '300px',
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLocation();
    });
  }

}
