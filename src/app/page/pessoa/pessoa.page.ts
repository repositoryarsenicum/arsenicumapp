import { Component, OnInit } from '@angular/core';
import { PessoaModel } from './../../model/pessoa-model';
import { PessoaService } from './../../service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  public pessoaModelList: PessoaModel[] = new Array();

  constructor(
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.recuperarPessoasSistema();
  }

  public recuperarPessoasSistema() {
    this.pessoaService.recuperarPessoasSistema().subscribe( response => {
      this.pessoaModelList = response;
    });
  }

  public redirecionarTelaCadastrarPessoa() {
    console.log("Redirecionar página de Cadastro de Pessoas!");
  }

}
