import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HistoryComponent } from './components/history/history.component';

const appRoutes: Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'catalog',
        component:CatalogComponent
    },
    {
        path:'resources',
        component:ResourcesComponent
    },
    {
        path:'programs',
        component:ProgramsComponent
    },
    {
        path:'history',
        component:HistoryComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
