import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

export const routes: Routes = [
    { path: '', component: ListaProdutosComponent },
    { path: 'post/:id', component: ProdutoDetalhesComponent },
    { path: '**', redirectTo: '' }
];
