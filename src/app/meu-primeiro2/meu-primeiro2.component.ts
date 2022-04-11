import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  NomePortal: any;

  cursos: string[] = ['javascript', 'angular', 'react', 'html', 'css', 'git']

  constructor() {
    
    for (let i = 0; i <= this.cursos.length; i++) {
      let curso = this.cursos[i];
    };

    this.NomePortal = 'http://mano.com.br'

   }

  ngOnInit(): void {
  }

}
