import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'movimentacao',
    loadChildren: () => import('./page/movimentacao/movimentacao.module').then( m => m.MovimentacaoPageModule)
  },
  {
    path: 'cartoes',
    loadChildren: () => import('./page/cartoes/cartoes.module').then( m => m.CartoesPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./page/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./page/pessoa/pessoa.module').then( m => m.PessoaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
