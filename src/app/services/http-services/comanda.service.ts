import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
// import { ComandaDTO } from '../model/comanda.dto';

@Injectable({ providedIn: 'root' })
export class ComandaService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/comanda`;

  gerarComanda(nome: string) {
    return this.httpClient.get<any>(`${this.urlController}/gerar/${nome}`);
  }

  fecharComanda(numero: number | string, body?: any) {
    return this.httpClient.put<any>(`${this.urlController}/fechar/${numero}`, body);
  }

}
