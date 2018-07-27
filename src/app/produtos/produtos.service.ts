import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Produto } from './produtos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Produto[]> {
    return this.http.get('http://localhost:3000/products').pipe(
      map( (data:any[]) => {
        const listarProdutos:Produto[] = new Array<Produto>()

        for (const item of data){
          const produto = new Produto()
          produto.id = item.id
          produto.name = item.name
          produto.description = item.description
          produto.price = item.price

          listarProdutos.push(produto)
        }
        return listarProdutos
      })
    )
  }

  buscarPorId(id): Observable<Produto> {
    return this.http.get('http://localhost:3000/products/' + id).pipe(
      map((data: any) => {
        const produto = new Produto()
        produto.id = data.id
        produto.name = data.name
        produto.description = data.description
        produto.price = data.price
        return produto
      })
    )
  }



}
