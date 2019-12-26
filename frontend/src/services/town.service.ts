import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Town } from './interfaces/town';

@Injectable({
    providedIn: 'root'
})
export class TownService {
    // Backend URL
    private _url = environment.API_URL;

    constructor(private http: HttpClient) {}

    addTown(townData) {
        return this.http.post<Town>(this._url, townData);
    }
}
