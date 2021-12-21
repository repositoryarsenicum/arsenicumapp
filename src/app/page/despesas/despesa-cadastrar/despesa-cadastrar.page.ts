import { Component, OnInit } from '@angular/core';
import { PessoaModel } from './../../../model/pessoa-model';
import { PessoaService } from './../../../service/pessoa.service';

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.page.html',
  styleUrls: ['./despesa-cadastrar.page.scss'],
})
export class DespesaCadastrarPage implements OnInit {

  public pessoaList: PessoaModel[];

  constructor(
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.recuperarPessoa();
  }

  public async recuperarPessoa() {
    this.pessoaService.recuperarPessoasSistema().subscribe(response => {
      this.pessoaList = response;
    });
  }

}
