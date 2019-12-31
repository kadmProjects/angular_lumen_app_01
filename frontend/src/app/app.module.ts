/** App Default Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** App Modules */
import { AppRoutingModule } from './app-routing.module';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { ActorsModule } from './actors/actors.module';
import { TownsModule } from './towns/towns.module';
import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompaniesModule } from './companies/companies.module';

/** App Services */
import { FormValidationMsgsService } from './../services/form-validation-msgs.service';
import { HttpErrorHandlerService } from './../services/http-error-handler.service';
import { AlertNotificationService } from './../services/alert-notification.service';
import { TownService } from './../services/town.service';

/** App Components */
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        ActorsModule,
        CompaniesModule,
        DashboardModule,
        DirectorsModule,
        MoviesModule,
        TownsModule,
        HttpClientModule
    ],
    providers: [
        FormValidationMsgsService,
        HttpErrorHandlerService,
        AlertNotificationService,
        TownService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
