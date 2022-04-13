import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['javascript', 'angular', 'react', 'html', 'css', 'git']
  }
}
