import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { TownsComponent } from './towns.component';
import { AddTownComponent } from './add-town/add-town.component';
import { EditTownComponent } from './edit-town/edit-town/edit-town.component';
import { ViewTownComponent } from './view-town/view-town/view-town.component';


@NgModule({
    declarations: [
        TownsComponent,
        AddTownComponent,
        EditTownComponent,
        ViewTownComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialComponentsModule
    ]
})
export class TownsModule { }
