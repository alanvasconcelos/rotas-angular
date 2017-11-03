import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const CURSO_ROUTES: Routes = [
  {
    path: '',
    component: CursoComponent,
    children: [{
      path: ':id',
      component: CursoDetalheComponent
    }]
  }
]

export const curso_routing: ModuleWithProviders = RouterModule.forChild(CURSO_ROUTES);