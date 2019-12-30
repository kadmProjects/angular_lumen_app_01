import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Town } from './interfaces/town';

@Injectable({
    providedIn: 'root'
})
export class TownService {
    // Backend URL
    private _url = environment.API_URL;

    constructor(private http: HttpClient) {}

    public addTown(townData: Town): Observable<Town> {
        let targetURL = this._url + 'town';
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.http.post<Town>(targetURL, townData, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error.message}`);
        }
        return throwError('Something bad happened; please try again later.');
    };
}
