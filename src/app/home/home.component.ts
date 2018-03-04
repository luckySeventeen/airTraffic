import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DataService} from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentLatitude: any;
  currentLongitude: any;
  glNotSupported = false;
  deniedLocation = false;
  aircraftList: any;

  constructor(private dataService: DataService) {
    this.getLocation();
    this.getData();
  }

  // get all aircrafts at your current location
  private getData(): void {
    this.dataService.getFlights('Serbia')
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
      });
    } else {
      this.glNotSupported = true;
      console.log('not supported by browser');
    }
    const vm = this;
    navigator.geolocation.watchPosition(function () {
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          vm.deniedLocation = true;
        }
      });
  }




}
