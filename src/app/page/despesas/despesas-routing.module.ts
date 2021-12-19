import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesasPage } from './despesas.page';

const routes: Routes = [
  {
    path: '',
    component: DespesasPage
  },
  {
    path: 'despesa-cadastrar',
    loadChildren: () => import('./despesa-cadastrar/despesa-cadastrar.module').then( m => m.DespesaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesasPageRoutingModule {}
