import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { HttpParams } from '@angular/common/http';
import { ComandaDTO } from 'src/app/model/comanda.dto';

@Injectable({ providedIn: 'root' })
export class ComandaService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/comanda`;

  getAllByParams(params: HttpParams) {
    return this.httpClient.get<ComandaDTO[]>(`${this.urlController}`, { params });
  }

  getByNumero(numero: any, params: HttpParams = new HttpParams()) {
    return this.httpClient.get<ComandaDTO[]>(`${this.urlController}/${numero}`, { params });
  }

  fecharComanda(numero: any, params: HttpParams = new HttpParams()) {
    return this.httpClient.put<ComandaDTO[]>(`${this.urlController}/fechar/${numero}`, { params });
  }

}
