import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  @ViewChild("form") form: NgForm;

  constructor() { }

  ngOnInit() { }

  public async salvarDadosPessoa() { 

    const { nome } = this.form.value;

    if(!nome) return;

    console.log(this.form.value);
    
    
  }

}
