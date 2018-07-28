import { Routes } from '@angular/router'
import { InicioComponent } from "./inicio/inicio.component";
import { ContatoComponent } from "./contato/contato.component";
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produtos/produto-novo/produto-novo.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const ROTAS: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos',
        children: [
            { path: '', component: ProdutosComponent },
            { path: 'novo', component: ProdutoNovoComponent, canActivate: [ AuthGuard ] },
            { path: ':id', component: ProdutoDetalheComponent } ]
    },
    { path: 'login', component: LoginComponent}
]