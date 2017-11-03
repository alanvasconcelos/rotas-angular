import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  cursos: any= [
    {id: 1, nome: 'Angular', language: 'pt'},
    {id: 2, nome: 'Java EE', language: 'en'},
    {id: 3, nome: 'Android', language: 'en'},
    {id: 4, nome: 'Nodejs',  language: 'pt'},
    {id: 5, nome: 'C#',      language: 'en'}
  ];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  getCurso(id: number) {
    for (let i = 0; i < this.cursos.length; i++)
      if (id == this.cursos[i].id)
        return this.cursos[i];
      
    return null;
  }

}