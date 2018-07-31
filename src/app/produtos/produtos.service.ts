import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Produto } from './produtos.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = `${environment.apiUrl}/produtos`

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Produto[]> {
    return this.http.get(this.url).pipe(
      map((data: any[]) => {
        const listarProdutos: Produto[] = new Array<Produto>()

        for (const item of data) {
          const produto = new Produto()
          produto.id = item.id
          produto.name = item.nome
          produto.description = item.descricao
          produto.price = item.preco

          listarProdutos.push(produto)
        }
        return listarProdutos
      })
    )
  }

  buscarPorId(id): Observable<Produto> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((data: any) => {
        const produto = new Produto()
        produto.id = data.id
        produto.name = data.nome
        produto.description = data.descricao
        produto.price = data.preco
        return produto
      })
    )
  }

  criarProduto(produto: Produto): Observable<Boolean> {
    return this.http.post(this.url, produto).pipe(
      map(data => {
        return true
      })
    )
  }
}
