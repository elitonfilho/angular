import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produto } from './produtos.model';

@Component({
  selector: 'ttt-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  lista: Produto[]

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.buscarTodos().subscribe( data => {
      this.lista = data
    })
  }

}
