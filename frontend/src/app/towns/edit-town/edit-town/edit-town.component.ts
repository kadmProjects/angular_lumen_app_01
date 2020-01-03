import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { AlertNotificationService } from 'src/services/alert-notification.service';
import { TownService } from './../../../../services/town.service';
import { FormValidationMsgsService } from './../../../../services/form-validation-msgs.service';
import { Town } from 'src/services/interfaces/town';

@Component({
  selector: 'app-edit-town',
  templateUrl: './edit-town.component.html',
  styleUrls: ['./edit-town.component.scss']
})
export class EditTownComponent implements OnInit {
    updateTownForm : FormGroup;
    town: Town;
    // Used to reset the form. Otherwise addTownForm.reset() not working
    @ViewChild(FormGroupDirective, {static: false}) formGroupDirective: FormGroupDirective;

    constructor(
        private validationMsgs: FormValidationMsgsService,
        private townService: TownService,
        private router: Router,
        private route: ActivatedRoute,
        private alertMsg: AlertNotificationService
    ) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.createFormControls()
        this.getTownToDisplay(id);
    }

    public createFormControls() {
        this.updateTownForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country_code: new FormControl('', [Validators.required]),
            country_iso_code: new FormControl('')
        });
    }

    private getTownToDisplay(id: string) {
        this.townService.getTown(id)
            .subscribe(
                // next calback
                (data: Town) => {
                    if(data['status'] == 'success') {
                        this.town = data['data'];
                        this.updateTownForm.patchValue(data['data']);
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

    public showErrorMsg(fieldName) {
        let obj = this.updateTownForm.controls[fieldName];
        return this.validationMsgs.showValidationMsg(fieldName, obj);
    }

    public onSubmit() {
        if (this.updateTownForm.valid) {
            this.townService.updateTown(this.town.id, this.updateTownForm.value)
                .subscribe(
                    // next calback
                    (data) => {
                        if (data['status'] == 'success') {
                            this.alertMsg.openSnackBar(data['msg'], data['status']);
                            this.router.navigate(['/towns']);
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
                        console.log('A POST round is Completed');
                    }
                );
        } else {
            let msg = 'Please fix the validation errors!';
            this.alertMsg.openSnackBar(msg, 'Failed');
        }
    }

}