import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produtos.model';

@Component({
  selector: 'ttt-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto = new Produto()
  constructor(private produtosService:ProdutosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const code = this.route.snapshot.params['id']
    this.produtosService.buscarPorId(code).subscribe( (data) => {
      this.produto = data
    })
  }

}
