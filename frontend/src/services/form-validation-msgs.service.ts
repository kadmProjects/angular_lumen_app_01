import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FormValidationMsgsService {

    constructor() {}

    showValidationMsg(fieldName, obj) {
        var msg;
        var placeholder = this.getPlaceholder(fieldName);

        if(obj.errors.required) {
            msg = placeholder + ' field is required!';
        }
        if(obj.errors.minlength) {
            let minLimit = obj.errors.minlength.requiredLength;
            msg = 'You must enter at leaset ' + minLimit + ' characters for ' + placeholder + ' field!';
        }
        
        return msg;
    }

    getPlaceholder(fieldName) {
        var fieldName = fieldName.split('_');
        var placeholder = '';
        
        fieldName.forEach(function(value) {           
            placeholder += value[0].toUpperCase() + value.slice(1) + " "; 
        });
        
        return placeholder;
    }
}
