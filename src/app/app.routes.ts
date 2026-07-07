import { Routes } from '@angular/router';


import { ExibirFavoritosComponent } from './components/exibir-favoritos-component/exibir-favoritos-component';
import { ExibirContatoComponent } from './components/exibir-contato-component/exibir-contato-component';

export const routes: Routes = [
  {
    path: '',
    component: ExibirContatoComponent
  },
  {
    path: 'favoritos',
    component: ExibirFavoritosComponent
  }
];