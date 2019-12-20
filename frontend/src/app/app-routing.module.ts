import { DashboardComponent } from './dashboard/dashboard.component';
import { TownsComponent } from './towns/towns.component';
import { CompaniesComponent } from './companies/companies.component';
import { DirectorsComponent } from './directors/directors.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App Modules
 */
import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent
    },
    { 
        path: 'movies', 
        component: MoviesComponent
    },
    { 
        path: 'actors', 
        component: ActorsComponent
    },
    { 
        path: 'directors', 
        component: DirectorsComponent
    },
    { 
        path: 'companies', 
        component: CompaniesComponent
    },
    { 
        path: 'towns', 
        component: TownsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
