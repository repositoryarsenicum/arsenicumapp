import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PessoaPageRoutingModule } from './pessoa-routing.module';
import { PessoaPage } from './pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PessoaPage]
})
export class PessoaPageModule {}
