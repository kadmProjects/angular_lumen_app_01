import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidationMsgsService } from './../../../services/form-validation-msgs.service';

@Component({
    selector: 'app-add-town',
    templateUrl: './add-town.component.html',
    styleUrls: ['./add-town.component.scss']
})
export class AddTownComponent implements OnInit {
    // Typescript variable type declaration
    addTownForm : FormGroup;

    constructor(private validationMsgs: FormValidationMsgsService) { }

    ngOnInit() {
        this.createFormControls();
    }

    createFormControls() {
        this.addTownForm = new FormGroup({
            town_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            country_code: new FormControl('', [Validators.required]),
            iso_country_code: new FormControl('')
        });
    }

    showErrorMsg(fieldName) {
        let obj = this.addTownForm.controls[fieldName];
        return this.validationMsgs.showValidationMsg(fieldName, obj);
    }

    onSubmit() {
        console.log(this.addTownForm.value);
        //this.addTownForm.reset();
    }
}
