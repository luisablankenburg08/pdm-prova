import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'cardapio',
    loadComponent: () => import('./cardapio/cardapio.page').then( m => m.CardapioPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'comanda',
    loadComponent: () => import('./comanda/comanda.page').then( m => m.ComandaPage)
  },
];
