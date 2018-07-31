import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos.model';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ttt-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  product: Produto = new Produto

  constructor(private produtoService: ProdutosService,
              private router: Router) { }

  ngOnInit() {
  }

  salvarProduto() {
    this.produtoService.criarProduto(this.product).subscribe(
      data => {
        this.router.navigate(['/produtos'])
      })
  }

}
