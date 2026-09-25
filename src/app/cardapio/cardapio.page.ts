import {ProdutoComponent} from '../components/produto/produto.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent, IonCardHeader, IonLabel, IonButtons, IonInput, IonText} from '@ionic/angular';
import { IonItem } from '@ionic/angular';
import {ProdutoService} from '../services/produtoService';
import { Produto } from '../models/produto';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonCard, IonButton, IonCardContent, IonCardHeader, IonLabel, IonButtons, IonItem, IonInput, IonText, ProdutoComponent],
})

export class CardapioPage   {

  listaprodutos: Produto[] = [];
  categoriaSelecionada = 'Tudo';

  constructor(
    public auth: AuthService,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    this.listaprodutos = this.produtoService.produtos;
   }

   async ngOnInit() {
    const usuario = await this.auth.esperarUsuario();
    if (!usuario) {
      this.router.navigate(['/login']);
      return;
    }
  }
async sair() {
    await this.auth.sair();
    this.router.navigate(['/login']);
  }

  get produtosVisiveis(): Produto[] {
    if (this.categoriaSelecionada === 'Tudo') {
      return this.listaprodutos;
    }

    return this.listaprodutos.filter((produto) => produto.categoria === this.categoriaSelecionada);
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
  }
}
