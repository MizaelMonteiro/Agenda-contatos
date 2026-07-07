import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[];
  #favoritos: Contato[];
  constructor(){
    this.#contatos = [];
    this.#favoritos = [];
  }
  
  adicionar(contato: Contato): void {
    this.#contatos.push(contato);
    console.log("favoritos", this.#favoritos)

  }

  obterTodos(): Contato[] {
    return this.#contatos;
  }
  
  existe(c: Contato): boolean {

    if(this.#contatos.includes(c)){
      return true
    }
    return false;


    /*  usando o email como chave:
    let existe: boolean = false;

    this.#contatos.forEach((contato) => {
      if (c.nome == contato.nome) {
        existe = true;
      }
    });

    return existe;
    */ 
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

  favoritar(contato:Contato): void{

    if(this.#favoritos.includes(contato)){
      alert("O contato já está na lista de favoritos")
      
    } else{
      this.#favoritos.push(contato);

    }
    
  
  }
  ObterFavoritos(){
    return this.#favoritos;
  }

  removerFav(c: Contato): boolean {
    const indice = this.#favoritos.findIndex(
      (contato) => contato.email === c.email);

    if (indice !== -1) {
      this.#favoritos.splice(indice, 1);
      return true;
    }

    return false;
  }


}