import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produtoService';

@Component({
  selector: 'app-minimo',
  templateUrl: './minimo.page.html',
  styleUrls: ['./minimo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonButtons, IonText, CommonModule, RouterModule]
})
export class MinimoPage {

  gorjeta = 0;
  readonly couvert = 2;
  produto: Produto;

  constructor(public produtoService: ProdutoService) {
    this.produto = this.produtoService.produtos[0];
    this.produto.comanda = this.produto.comanda || 1;
  }

  get subtotal(): number {
    return this.produto.preco * (this.produto.comanda ?? 0);
  }

  get valorGorjeta(): number {
    return this.subtotal * this.gorjeta;
  }

  get total(): number {
    return this.subtotal + this.couvert + this.valorGorjeta;
  }

  aumentar() {
    this.produto.comanda = (this.produto.comanda ?? 0) + 1;
  }

  diminuir() {
    this.produto.comanda = Math.max(0, (this.produto.comanda ?? 0) - 1);
  }

  retirar() {
    this.produto.comanda = 0;
  }

  selecionarGorjeta(valor: number) {
    this.gorjeta = valor;
  }


}
