import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
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
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
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

  public async excluirPessoa(codigoPessoa: number) {
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
              this.pessoaService.excluirPessoaSistema(codigoPessoa).subscribe( response => {
                this.recuperarPessoasSistema();
              });
          }
        }
      ]
    });
    alertaExclusao.present();
  }

  public async redirecionarTelaCadastrarPessoaFisica() {
    const modal = await this.modalController.create({
      component: PessoaCadastrarPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present();
  }

  public async redirecionarTelaCadastrarPessoaJuridica() {
    console.log("Tela Pessoa Juridica");
  }

  public async redirecionarTelaCadastrarPessoaIntituicaoFinanceira() {
    console.log("Tela Pessoa Instituicao");
  }

  public async verificarTipoPessoaCadastro() {
    const actionSheet = await this.actionSheetController.create({
      header: "Categoria da Pessoa",
      buttons: [
        {
        text: "Pessoa Física",
        icon: "add",
        handler: () => {
          this.redirecionarTelaCadastrarPessoaFisica();
        }
      },
      {
        text: "Pessoa Jurídica",
        icon: "add"
      },
      {
        text: "Pessoa Instituição Financeira",
        icon: "add"
      }
    ]
    });
    await actionSheet.present();
  }

}
