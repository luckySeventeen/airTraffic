import {Component, OnInit} from '@angular/core';
import {DataService} from '../home/data.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  providers: [DataService],
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  private sub: any;
  flightId: string;
  flight: any = {};

  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location) {
    console.log(this.flightId);
  }

  public goBack(): void {
    this._location.back();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.flightId = params['id'];
      this.dataService.getFlightById(this.flightId)
        .subscribe(data => {
          this.flight = data.acList[0];
          console.log(this.flight);
        });
    });
  }

}
