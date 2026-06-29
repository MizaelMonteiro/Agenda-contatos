import { Component, inject } from '@angular/core';
import { AgendaService } from "../../services/agenda-service";
import { Contato } from '../../services/contato';

@Component({
  selector: 'app-exibir-contato-component',
  imports: [],
  templateUrl: './exibir-contato-component.html',
  styleUrl: './exibir-contato-component.scss',
})
export class ExibirContatoComponent {
  #agendaService = inject(AgendaService);
  protected readonly contatos: Contato[] = [];

  constructor() {
    this.contatos = this.#agendaService.obterTodos();
    
    console.log(this.contatos);
  }

  remover(c: Contato){
    this.#agendaService.remover(c)

  }
}
