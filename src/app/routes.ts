import { Routes } from '@angular/router'
import { InicioComponent } from "./inicio/inicio.component";
import { ContatoComponent } from "./contato/contato.component";
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produtos/produto-novo/produto-novo.component';

export const ROTAS: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produtos/novo', component: ProdutoNovoComponent},
    { path: 'produtos/:id', component: ProdutoDetalheComponent}
]

