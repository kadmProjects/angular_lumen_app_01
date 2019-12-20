/** App Default Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** App Modules */
import { MaterialComponentsModule } from './material-components/material-components.module';
import { ActorsModule } from './actors/actors.module';
import { TownsModule } from './towns/towns.module';
import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompaniesModule } from './companies/companies.module';

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
        TownsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
