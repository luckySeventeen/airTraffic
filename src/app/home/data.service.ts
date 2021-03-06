import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class DataService {
  dataUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getFlights(Cou: string) {

    // Add safe, URL encoded search parameter if there is a search term
    const options = {
      params: new HttpParams().set('fcouQ', Cou)

    };
    return this.http.get(this.dataUrl, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFlightById(id: string) {

    const options = {
      params: new HttpParams().set('fIcoQ', id)

    };
    return this.http.get(this.dataUrl, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
