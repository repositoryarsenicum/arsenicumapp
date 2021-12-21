import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PessoaService } from './../../service/pessoa.service';
import { DespesaCadastrarPage } from './despesa-cadastrar/despesa-cadastrar.page';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() { }

  public async redirecionarTelaCadastrarDespesa() {
    const modal = await this.modalController.create({
      component: DespesaCadastrarPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present();
  }

}
