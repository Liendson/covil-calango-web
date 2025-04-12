import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { HttpParams } from '@angular/common/http';
import { SolicitacaoDTO } from 'src/app/model/solicitacao.dto';

@Injectable({ providedIn: 'root' })
export class SolicitacaoService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/solicitacao`;

  getAllByParams(params: HttpParams) {
    return this.httpClient.get<SolicitacaoDTO[]>(`${this.urlController}`, { params });
  }

}
