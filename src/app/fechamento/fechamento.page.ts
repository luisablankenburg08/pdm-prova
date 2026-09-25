import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonText, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-fechamento',
  templateUrl: './fechamento.page.html',
  styleUrls: ['./fechamento.page.scss'],
  imports: [IonContent, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonText, CommonModule, RouterModule]
})
export class FechamentoPage {

  constructor(private router: Router) { }

  fecharConta() {
    this.router.navigate(['/cardapio']);
  }

}
