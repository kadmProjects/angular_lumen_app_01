import { Component, OnInit } from '@angular/core';
import { TownService } from './../../services/town.service';
import { AlertNotificationService } from 'src/services/alert-notification.service';

import { Town } from 'src/services/interfaces/town';

@Component({
    selector: 'app-towns',
    templateUrl: './towns.component.html',
    styleUrls: ['./towns.component.scss']
})
export class TownsComponent implements OnInit {
    towns: Town;
    displayedColumns: string[] = ['ID', 'NAME', 'COUNTRY', 'COUNTRY_CODE', 'COUNTRY_ISO_CODE', 'DATE_CREATED', 'DATE_UPDATED', 'ACTION'];

    constructor(
        private townService: TownService,
        private alertMsg: AlertNotificationService
    ) {}

    ngOnInit() {
        this.getAllTownsToDisplay();
    }

    private getAllTownsToDisplay() {
        this.townService.getAllTowns()
            .subscribe(
                // next calback
                (data: Town) => {
                    this.towns = data;
                },
                // error callback
                error => {
                    this.alertMsg.openSnackBar(error, 'Failed');
                },
                // complete callback
                () => {
                    console.log('A GET round is Completed');
                }
            )
    }

}
