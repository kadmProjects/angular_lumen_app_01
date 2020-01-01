import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { FormValidationMsgsService } from './../../../services/form-validation-msgs.service';
import { TownService } from './../../../services/town.service';
import { AlertNotificationService } from 'src/services/alert-notification.service';
import { Town } from './../../../services/interfaces/town';

@Component({
    selector: 'app-add-town',
    templateUrl: './add-town.component.html',
    styleUrls: ['./add-town.component.scss']
})
export class AddTownComponent implements OnInit {
    // Typescript variable type declaration
    addTownForm : FormGroup;
    // Used to reset the form. Otherwise addTownForm.reset() not working
    @ViewChild(FormGroupDirective, {static: false}) formGroupDirective: FormGroupDirective;

    constructor(
        private validationMsgs: FormValidationMsgsService,
        private townService: TownService,
        private router: Router,
        private alertMsg: AlertNotificationService
    ) {}

    ngOnInit() {
        this.createFormControls();
    }

    createFormControls() {
        this.addTownForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country_code: new FormControl('', [Validators.required]),
            country_iso_code: new FormControl('')
        });
    }

    showErrorMsg(fieldName) {
        let obj = this.addTownForm.controls[fieldName];
        return this.validationMsgs.showValidationMsg(fieldName, obj);
    }

    onSubmit() {
        if (this.addTownForm.valid) {
            this.townService.addTown(this.addTownForm.value)
                .subscribe(
                    // next calback
                    (data: Town) => {
                        if (data['status'] == 'success') {
                            this.alertMsg.openSnackBar(data['msg'], data['status']);
                            setTimeout(() => this.formGroupDirective.resetForm(), 0);
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
