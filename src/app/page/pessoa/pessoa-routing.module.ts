import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPage } from './pessoa.page';


const routes: Routes = [
  {
    path: '',
    component: PessoaPage
  },
  {
    path: 'pessoa-cadastrar',
    loadChildren: () => import('./pessoa-cadastrar/pessoa-cadastrar.module').then( m => m.PessoaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaPageRoutingModule {}
