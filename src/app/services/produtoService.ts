import {Injectable} from '@angular/core';  
import {Produto} from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    produtos: Produto[] = [
    {id: 1, nome: 'X-Joaquim', preco: 18.00, estoque: 10, categoria: 'Lanche', comanda: 1},
    {id: 2, nome: 'Brigadeirão', preco: 8.00, estoque: 0, categoria: 'Doce'},
    {id: 3, nome: 'Coxinha', preco: 7.00, estoque: 8, categoria: 'Lanche'},
    {id: 4, nome: 'Batata Frita', preco: 15.00, estoque: 2, categoria: 'Porção'},
    {id: 5, nome: 'Bolo', preco: 10.00, estoque: 15, categoria: 'Doce'},
    ]

}