import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionarContatoComponent } from "./components/adicionar-contato-component/adicionar-contato-component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExibirContatoComponent } from "./components/exibir-contato-component/exibir-contato-component";
import { ExibirFavoritosComponent } from "./components/exibir-favoritos-component/exibir-favoritos-component";


@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet, AdicionarContatoComponent, ExibirContatoComponent, ExibirFavoritosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agendav2');
}