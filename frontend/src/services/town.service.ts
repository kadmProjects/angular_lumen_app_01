import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TownService {
    // Backend URL
    private _url = environment.API_URL;

    constructor(private http: HttpClient) {}

    addTown(townData) {
        let target = this._url + 'town';
        return this.http.post(target, JSON.stringify(townData));
    }
}
