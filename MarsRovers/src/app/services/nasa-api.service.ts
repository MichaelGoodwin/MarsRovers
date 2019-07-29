import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manifest } from './beans/Manifest';
import { Photo } from './beans/Photo';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const API_KEY = 'EKvsuvGZcrGFSzKF5Z0Vaa620rjoRGh8k0Yh9wYV';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  MINUTE_MILLISECONDS = 1000 * 60;
  DAY_MILLISECONDS = this.MINUTE_MILLISECONDS * 60 * 24;
  // A SOL on mars is approximately 37 minutes longer than an earth day;
  SOL_MILLISECONDS = this.DAY_MILLISECONDS + (this.MINUTE_MILLISECONDS * 37);

  private earthDates = {};

  constructor(private http: HttpClient) { }

  private createApiUrl(endpoint: string): string {
    return API_BASE_URL + endpoint + '?api_key=' + API_KEY;
  }

  private parametrized(parameter: string, value: string): string {
    return '&' + parameter + '=' + value;
  }

  private dateAsQueryString(roverName: string, date: Date): string {
    const maxDate = this.earthDates[roverName];
    if (maxDate !== undefined && date > maxDate) {
      date = maxDate;
    }

    return date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate();
  }

  getRoverManifest(roverName: string): Observable<Manifest> {
    const url = this.createApiUrl('manifests/' + roverName);
    const response: Observable<any> = this.http.get<any>(url);

    return response.pipe(
      catchError(err => {
        console.log(err);
        return throwError('Error retrieving manifest from NASA API for the ' + roverName + ' rover');
      }),
      map(data => {
        const manifest: Manifest = data.photo_manifest;
        if (manifest === undefined) {
          return throwError('Retrieved invalid manifest format for the ' + roverName + ' rover');
        }

        const date = this.getDateFromNasaDate(manifest.max_date);
        this.earthDates[roverName] = date;

        return data.photo_manifest;
      })
    );
  }

  getTodaysRoverPhotos(roverName: string): Observable<Photo[]> {
    let url = this.createApiUrl('rovers/' + roverName + '/photos');
    url += this.parametrized('earth_date', this.dateAsQueryString(roverName, new Date()));
    const response: Observable<any> = this.http.get<any>(url);

    return response.pipe(
      catchError(err => {
        console.log(err);
        return throwError('Error retrieving photos from NASA API for the ' + roverName + ' rover');
      }),
      map(data => {
        if (data.photos === undefined) {
          return throwError('Retrieved invalid photo format for the ' + roverName + ' rover');
        }

        return data.photos;
      })
    );
  }

  public getDateFromNasaDate(nasaDate: string): Date {
    const dateValues: string[] = nasaDate.split('-');
    if (dateValues.length !== 3) {
      // Unexpected format?
      console.warn('Unexpected nasa date format');
      return new Date();
    }

    return new Date(
      parseInt(dateValues[0], 10),
      parseInt(dateValues[1], 10) - 1,
      parseInt(dateValues[2], 10)
    );
  }

  zeroPad(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }

  public getNasaDateFromDate(date: Date): string {
    const dateString = date.getFullYear() + '-' + this.zeroPad(date.getMonth() + 1) + '-' + this.zeroPad(date.getDate());
    return dateString;
  }

  public estimateDateFromPassedSols(nasaLandingDate: string, sols: number): Date {
    const landingDate = this.getDateFromNasaDate(nasaLandingDate);
    const endDate = new Date(+landingDate + (this.SOL_MILLISECONDS * sols));
    return endDate;
  }

  public estimateNasaDateFromPassedSols(nasaLandingDate: string, sols: number): string {
    const date = this.estimateDateFromPassedSols(nasaLandingDate, sols);
    return this.getNasaDateFromDate(date);
  }

  public estimatePassedSolsFromNasaDates(nasaLandingDate: string, nasaDate: string): number {
    const landingDate = this.getDateFromNasaDate(nasaLandingDate);
    const specifiedDate = this.getDateFromNasaDate(nasaDate);
    const timeSpentOnMars = +specifiedDate - +landingDate;
    // We start on day 1
    return 1 + Math.trunc(timeSpentOnMars / this.SOL_MILLISECONDS);
  }
}
