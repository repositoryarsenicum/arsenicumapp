import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaModel } from './../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarPessoasSistema() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>("http://localhost:3000/pessoa");
  }

}
