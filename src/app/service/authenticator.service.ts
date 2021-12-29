import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public realizarLogin(identificador: string, chave: string) {
    return this.httpClient.post(`http://localhost:3000/autenticador`, { identificador, chave });
  }

}
