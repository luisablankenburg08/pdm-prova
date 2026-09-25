export type Produto = {
  id: number,
  nome: string,
  preco: number,
  estoque: number,
  categoria: string,
  comanda?: number,
}