import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Town } from './interfaces/town';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class TownService {
    // Backend URL
    private _url = environment.API_URL;

    constructor(
        private http: HttpClient,
        private httpErrorMsg: HttpErrorHandlerService
    ) {}

    public addTown(townData: Town): Observable<Town> {
        let targetURL = this._url + 'town';
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.http.post<Town>(targetURL, townData, httpOptions)
            .pipe(
                catchError(this.httpErrorMsg.handleError)
            );
    }

    public getAllTowns(): Observable<Town> {
        let sourceURL = this._url + 'town';

        return this.http.get<Town>(sourceURL)
            .pipe(
                catchError(this.httpErrorMsg.handleError)
            );
    }
}
