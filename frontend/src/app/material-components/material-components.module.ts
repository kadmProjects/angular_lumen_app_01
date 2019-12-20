import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 *  Angular Material Modules
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const angularMaterialComponents = [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        angularMaterialComponents
    ],
    exports: [
        angularMaterialComponents
    ]
})
export class MaterialComponentsModule { }
