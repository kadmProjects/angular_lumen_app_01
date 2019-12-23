import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { TownsComponent } from './towns.component';
import { AddTownComponent } from './add-town/add-town.component';


@NgModule({
    declarations: [
        TownsComponent,
        AddTownComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialComponentsModule
    ]
})
export class TownsModule { }
