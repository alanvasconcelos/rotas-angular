import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: []
})
export class CursoComponent implements OnInit {

  cursos: any = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
