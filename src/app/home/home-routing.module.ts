import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: "principal",
        children: [
          {
            path: "",
            loadChildren: () => import("../page/principal/principal.module").then(m => m.PrincipalPageModule)
          }
        ]
      },
      {
        path: "movimentacao",
        children: [
          {
            path: "",
            loadChildren: () => import("../page/movimentacao/movimentacao.module").then(m => m.MovimentacaoPageModule)
          }
        ]
      },
      {
        path: "cartoes",
        children: [
          {
            path: "",
            loadChildren: () => import("../page/cartoes/cartoes-routing.module").then(m => m.CartoesPageRoutingModule)
          }
        ]
      },
      {
        path: "configuracao",
        children: [
          {
            path: "",
            loadChildren: () => import("../page/configuracao/configuracao.module").then(m => m.ConfiguracaoPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "home/principal",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "home/principal",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
