import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { HttpParams } from '@angular/common/http';
import { PedidoDTO } from 'src/app/model/pedido.dto';

@Injectable({ providedIn: 'root' })
export class PedidoService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/pedido`;

  public getAllByParams(params: HttpParams) {
    return this.httpClient.get<PedidoDTO[]>(`${this.urlController}`, { params });
  }

  public aceitarPedido(id: number, body?: any) {
    return this.httpClient.patch(`${this.urlController}/aceitar/${id}`, body);
  }

  public cancelarPedido(id: number, body?: any) {
    return this.httpClient.patch(`${this.urlController}/cancelar/${id}`, body);
  }

  public concluirPedido(id: number, body?: any) {
    return this.httpClient.patch(`${this.urlController}/concluir/${id}`, body);
  }

  public finalizarPedido(id: number, body?: any) {
    return this.httpClient.patch(`${this.urlController}/finalizar/${id}`, body);
  }

}
