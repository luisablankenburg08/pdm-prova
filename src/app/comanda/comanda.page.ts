import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produtoService';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonButtons, IonText, CommonModule, RouterModule]
})
export class ComandaPage {

  gorjeta = 0;
  contaFechada = false;
  readonly couvert = 2;
  readonly valorMinimo = 20;

  constructor(public produtoService: ProdutoService) { }

  get itens(): Produto[] {
    return this.produtoService.produtos.filter((produto) => (produto.comanda ?? 0) > 0);
  }

  get subtotal(): number {
    return this.itens.reduce((total, produto) => total + produto.preco * (produto.comanda ?? 0), 0);
  }

  get valorGorjeta(): number {
    return this.subtotal * this.gorjeta;
  }

  get total(): number {
    return this.subtotal + this.couvert + this.valorGorjeta;
  }

  get podeFecharConta(): boolean {
    return this.subtotal >= this.valorMinimo;
  }

  aumentar(produto: Produto) {
    produto.comanda = (produto.comanda ?? 0) + 1;
  }

  diminuir(produto: Produto) {
    produto.comanda = Math.max(0, (produto.comanda ?? 0) - 1);
  }

  retirar(produto: Produto) {
    produto.comanda = 0;
  }

  selecionarGorjeta(valor: number) {
    this.gorjeta = valor;
  }

  fecharConta() {
    if (this.podeFecharConta) {
      this.contaFechada = true;
    }
  }

}
