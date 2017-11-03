import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoComponent } from './curso.component';
import { CursoService } from './curso.service';
import { curso_routing } from './curso.route';

@NgModule({
  imports: [
    CommonModule,
    curso_routing
  ],
  declarations: [
    CursoDetalheComponent,
    CursoComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursoModule { }
