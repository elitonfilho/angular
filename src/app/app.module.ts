import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { ROTAS } from './routes';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InicioComponent,
    ContatoComponent,
    ProdutosComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROTAS),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
