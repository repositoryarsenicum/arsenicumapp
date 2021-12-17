import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaCadastrarPageRoutingModule } from './pessoa-cadastrar-routing.module';

import { PessoaCadastrarPage } from './pessoa-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaCadastrarPageRoutingModule
  ],
  declarations: [PessoaCadastrarPage]
})
export class PessoaCadastrarPageModule {}
