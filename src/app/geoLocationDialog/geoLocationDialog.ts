import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-geo-location-dialog',
  templateUrl: 'geoLocationDialog.html',
})
export class GeoLocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GeoLocationDialogComponent>) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
