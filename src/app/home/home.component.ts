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
  data: any;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    this.openDialog();
    this.getData();

  }

  getData(): void {
    this.dataService.getFlights(44.676814799999995, 20.6668925)
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLatitude = position.coords.latitude;
        this.currentLongitude = position.coords.longitude;
        console.log(this.currentLongitude, this.currentLatitude);
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
