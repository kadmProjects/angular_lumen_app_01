import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-town',
    templateUrl: './add-town.component.html',
    styleUrls: ['./add-town.component.scss']
})
export class AddTownComponent implements OnInit {
    // Typescript variable type declaration
    addTownForm : FormGroup;

    constructor() { }

    ngOnInit() {
        this.addTownForm = new FormGroup({
            townname: new FormControl('', Validators.required),
            countryname: new FormControl('', Validators.required),
            countrycode: new FormControl('', Validators.required),
            isocountrycode: new FormControl('',Validators.required)
        });
    }

}
