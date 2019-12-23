import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';
import { MaterialComponentsModule } from './../material-components/material-components.module';

import { ActorsComponent } from './actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';

@NgModule({
    declarations: [
        ActorsComponent,
        AddActorComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ]
})
export class ActorsModule { }
