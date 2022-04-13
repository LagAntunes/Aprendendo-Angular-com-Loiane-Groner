import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  NomePortal: any;

  cursos: any;

  constructor(private cursosService: CursosService) {
    
    /*for (let i = 0; i <= this.cursos.length; i++) {
      let curso = this.cursos[i];
    };*/
    
    /*var servico = new CursosService();*/

    this.cursos = this.cursosService.getCursos();


    this.NomePortal = 'http://mano.com.br'

   }

  ngOnInit(): void {
  }

}
