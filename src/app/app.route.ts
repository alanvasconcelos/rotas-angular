import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'curso', loadChildren: 'app/curso/curso.module#CursoModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);