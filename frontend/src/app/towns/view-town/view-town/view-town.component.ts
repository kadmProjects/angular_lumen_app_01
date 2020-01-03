import { Component, OnInit } from '@angular/core';
import { TownService } from 'src/services/town.service';
import { AlertNotificationService } from 'src/services/alert-notification.service';
import { Town } from 'src/services/interfaces/town';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-town',
    templateUrl: './view-town.component.html',
    styleUrls: ['./view-town.component.scss']
})
export class ViewTownComponent implements OnInit {
    town: Town;

    constructor(
        private townService: TownService,
        private route: ActivatedRoute,
        private alertMsg: AlertNotificationService
    ) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.getTownToDisplay(id);
    }

    private getTownToDisplay(id: string) {
        this.townService.getTown(id)
            .subscribe(
                // next calback
                (data: Town) => {
                    if(data['status'] == 'success') {
                        this.town = data['data'];
                    } else {
                        this.alertMsg.openSnackBar(data['msg'], data['status']);
                    }
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
