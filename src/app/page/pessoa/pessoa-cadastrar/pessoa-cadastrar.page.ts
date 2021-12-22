import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PessoaModel } from './../../../model/pessoa-model';
import { PessoaService } from './../../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  @ViewChild("form") form: NgForm;

  public isFocoCampo: boolean;

  constructor(
    private pessoaService: PessoaService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Pessoa Cadastrar...."); 
  }

  onBlur(event: any) {
    const value = event.target.value;
    if(!value) {
      this.isFocoCampo = false;
    }
    console.log(value);    
  }

  public async salvarDadosPessoa() {
    const alerta = await this.alertController.create({
      header: "Sucesso",
      message: "Cadastro realizado com sucesso!",
      buttons: [
        {
          text: "Fechar",
          role: "cancel",
          handler: () => {
            this.redirecionarPaginaGestaoPessoa();
        }
        }
      ]
    });
    const pessoaModel: PessoaModel = this.form.value;
    const { nome } = this.form.value;
    if(!nome) return;
    this.pessoaService.criarPessoaFisica(pessoaModel).subscribe( response => {
      this.form.reset(); 
      alerta.present();
    });
  }

  public redirecionarPaginaGestaoPessoa() {
    window.location.reload();
  }

}
