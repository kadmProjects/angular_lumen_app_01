import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-add-actor',
    templateUrl: './add-actor.component.html',
    styleUrls: ['./add-actor.component.scss']
})
export class AddActorComponent implements OnInit {

    addActorForm = new FormGroup({
        
    });

constructor() { }

ngOnInit() {
}

}
