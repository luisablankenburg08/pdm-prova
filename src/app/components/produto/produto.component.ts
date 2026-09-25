import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent, IonCardHeader, IonLabel, IonButtons, IonInput, IonText, IonIcon } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Produto} from '../../models/produto';
import { alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent, IonCardHeader, IonLabel, IonButtons, IonInput, IonText, IonIcon, CommonModule],
})
export class ProdutoComponent  implements OnInit {

  readonly alertCircleOutline = alertCircleOutline;

  @Input() 
  
  produto: Produto = { id: 0, nome: '', preco: 0, estoque: 0, categoria: '', comanda: 0 };

  constructor() { }

  async naComanda() {
     if (this.produto.comanda === undefined || this.produto.comanda === null) {
    this.produto.comanda = 0;
  }
  
  this.produto.comanda += 1;
}
  ngOnInit() {}

}
