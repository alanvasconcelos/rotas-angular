import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CursoService } from './../curso.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: []
})
export class CursoDetalheComponent implements OnInit {

  id;
  curso: any;
  inscricao: Subscription;
  
  constructor(
    private cursoService: CursoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this.activatedRouter.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['']);
        }
      }
    );
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
