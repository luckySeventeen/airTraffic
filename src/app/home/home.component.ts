import {Component, OnInit} from '@angular/core';
import {GeoLocationDialogComponent} from '../geoLocationDialog/geoLocationDialog';
import {MatDialog} from '@angular/material/dialog';
import {DataService} from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLatitude: any;
  currentLongitude: any;
  glNotSupported = false;
  aircraftList: any;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    this.openDialog();

  }

  // get all aircrafts at your current location
  private getDataFirstTime(): void {
    this.dataService.getFlights(this.currentLatitude, this.currentLongitude)
      .subscribe(data => {
        this.aircraftList = data.acList;
        console.log(this.aircraftList);
      });
  }
// get users current geo location
  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLatitude = position.coords.latitude;
        this.currentLongitude = position.coords.longitude;
        this.getDataFirstTime();
      });
    } else {
      this.glNotSupported = true;
      console.log('not supported by browser');
    }
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
