import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ttt-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  usuarioEstaLogado: boolean = false

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.usuarioEstaLogado = this.authService.usuarioEstaLogado()
    this.authService.usuarioAutenticado.subscribe(
      data => {
        this.usuarioEstaLogado = data
      })
  }

  sairDoSistema() {
    this.authService.sair()
  }

}
