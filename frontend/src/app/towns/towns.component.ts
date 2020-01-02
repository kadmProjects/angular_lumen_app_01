import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TownService } from './../../services/town.service';
import { AlertNotificationService } from 'src/services/alert-notification.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Town } from 'src/services/interfaces/town';

@Component({
    selector: 'app-towns',
    templateUrl: './towns.component.html',
    styleUrls: ['./towns.component.scss']
})
export class TownsComponent implements OnInit {
    towns;
    displayedColumns: string[] = [
        'id',
        'name',
        'country',
        'country_code',
        'country_iso_code',
        'created_at',
        'updated_at',
        'action'
    ];
    dataSource: MatTableDataSource<Town>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(
        private townService: TownService,
        private alertMsg: AlertNotificationService,
        public dialog: MatDialog
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
                    this.dataSource = new MatTableDataSource(this.towns);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
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

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();  
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    public deleteTown(id: number) {
        this.townService.deleteTown(id)
            .subscribe(
                // next calback
                (data) => {
                    if (data['status'] == 'success') {
                        this.alertMsg.openSnackBar(data['msg'], data['status']);
                        this.getAllTownsToDisplay();
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
