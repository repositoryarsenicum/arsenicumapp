import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { PessoaModel } from './../../model/pessoa-model';
import { PessoaService } from './../../service/pessoa.service';
import { PessoaCadastrarPage } from './pessoa-cadastrar/pessoa-cadastrar.page';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  public pessoaModelList: PessoaModel[] = new Array();

  public pesquisarInput;

  constructor(
    private pessoaService: PessoaService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.recuperarPessoasSistema();
  }

  public async recuperarPessoasSistema() {
    const loading = await this.loadingController.create({
      message: 'Carregando Dados...'
    });
    loading.present();
    this.pessoaService.recuperarPessoasSistema().subscribe( response => {
      this.pessoaModelList = response;
    });
    loading.dismiss();
  }

  public async excluirPessoa() {
    const alertaExclusao = await this.alertController.create({
      header: "Alerta",
      message: "Deseja realmente excluir essa Pessoa?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary"
        },
        {
          text: "Excluir",
          handler: () => {
              console.log("Excluir Pessoa!");
              this.recuperarPessoasSistema();
          }
        }
      ]
    });
    alertaExclusao.present();
  }

  public async redirecionarTelaCadastrarPessoa() {
    const modal = await this.modalController.create({
      component: PessoaCadastrarPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present();
  }

}
