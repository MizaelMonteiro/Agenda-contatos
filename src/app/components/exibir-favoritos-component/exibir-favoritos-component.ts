import { Component, inject } from '@angular/core';
import { AgendaService } from "../../services/agenda-service";
import { Contato } from '../../services/contato';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exibir-favoritos-component',
  imports: [],
  templateUrl: './exibir-favoritos-component.html',
  styleUrl: './exibir-favoritos-component.scss',
})
export class ExibirFavoritosComponent{
  #agendaService = inject(AgendaService);

  protected readonly favoritos: Contato[] = [];

  constructor() {

    this.favoritos = this.#agendaService.ObterFavoritos();
    console.log("Favoritos recebidos", this.favoritos);

  }


  favoritar(c:Contato){
    this.#agendaService.favoritar(c)
  }
  removerFav(c:Contato){
    this.#agendaService.removerFav(c)
  }
}
