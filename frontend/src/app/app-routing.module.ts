import { DashboardComponent } from './dashboard/dashboard.component';
import { TownsComponent } from './towns/towns.component';
import { CompaniesComponent } from './companies/companies.component';
import { DirectorsComponent } from './directors/directors.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App Components
 */
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './actors/add-actor/add-actor.component';
import { AddTownComponent } from './towns/add-town/add-town.component';
import { EditTownComponent } from './towns/edit-town/edit-town/edit-town.component';
import { ViewTownComponent } from './towns/view-town/view-town/view-town.component';

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
        path: 'actors/add', 
        component: AddActorComponent
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
    },
    {
        path: 'towns/add',
        component: AddTownComponent
    },
    {
        path: 'towns/edit/:id', 
        component: EditTownComponent
    },
    {
        path: 'towns/view/:id', 
        component: ViewTownComponent
    },
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
