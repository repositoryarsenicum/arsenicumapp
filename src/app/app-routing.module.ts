import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
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
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./page/cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./page/despesas/despesas.module').then( m => m.DespesasPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'singin',
    loadChildren: () => import('./page/singin/singin.module').then( m => m.SinginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./page/forgot/forgot.module').then( m => m.ForgotPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
