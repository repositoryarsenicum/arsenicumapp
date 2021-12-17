import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaCadastrarPage } from './pessoa-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaCadastrarPageRoutingModule {}
