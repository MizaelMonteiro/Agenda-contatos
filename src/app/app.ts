import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionarContatoComponent } from "./components/adicionar-contato-component/adicionar-contato-component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExibirContatoComponent } from "./components/exibir-contato-component/exibir-contato-component";
import { NavBarComponent } from "./components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, AdicionarContatoComponent, ExibirContatoComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agendav2');
}
