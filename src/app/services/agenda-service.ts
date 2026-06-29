import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[];
  constructor(){
    this.#contatos = [];
  }
  adicionar(contato: Contato): void {
    this.#contatos.push(contato);
    console.log(this.#contatos.length);
    console.log(this.#contatos)
  
  }

  obterTodos(): Contato[] {
    return this.#contatos;
  }
  
  existe(c: Contato): boolean {
    let existe: boolean = false;

    this.#contatos.forEach((contato) => {
      if (c.nome == contato.nome) {
        existe = true;
      }
    });

    return existe;
  }

  remover(c: Contato): boolean {
    const indice = this.#contatos.findIndex(
      (contato) => contato.email === c.email);

    if (indice !== -1) {
      this.#contatos.splice(indice, 1);
      return true;
    }

    return false;
  }

}