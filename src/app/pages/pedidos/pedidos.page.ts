import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CardPedidosComponent } from 'src/app/components/card-pedidos/card-pedidos.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/http-services/pedidos.service';
import { PedidoDTO } from 'src/app/model/pedido.dto';
import { HttpParams } from '@angular/common/http';
import { StatusPedidoEnum } from 'src/app/enums/status-pedido.enum';
import { lastValueFrom } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { WebsocketService } from 'src/app/services/http-services/websocket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, MaterialModule, CardPedidosComponent, TablerIconsModule],
  templateUrl: './pedidos.page.html',
  encapsulation: ViewEncapsulation.None,
})
export class PedidosPage implements OnInit {

  public displayedColumns: string[] = ['pedido', 'quantidade', 'numero', 'cliente', 'hora', 'acoes'];
  public pedidosPendentes = new MatTableDataSource<PedidoDTO>([]);
  public pedidosEmAndamento = new MatTableDataSource<PedidoDTO>([]);
  public pedidosProntos = new MatTableDataSource<PedidoDTO>([]);

  constructor(
    private pedidoService: PedidoService,
    private alertService: AlertService,
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {
    this.carregarPedidos();
    this.createWebSocketConnection();
  }
  
  createWebSocketConnection() {
    this.websocketService.createWebSocketConnection().subscribe(() => {
      this.websocketService.getClient().subscribe(`/topic/pedidos`, () => this.carregarPedidos());
    });
  }

  async carregarPedidos() {
    const params = this.buildParams([StatusPedidoEnum.SOLICITADO, StatusPedidoEnum.EM_ANDAMENTO, StatusPedidoEnum.PRONTO]);
    const pedidos = await lastValueFrom(this.pedidoService.getAllByParams(params));
    this.pedidosPendentes.data = pedidos.filter(p => p.status === StatusPedidoEnum.SOLICITADO);
    this.pedidosEmAndamento.data = pedidos.filter(p => p.status === StatusPedidoEnum.EM_ANDAMENTO);
    this.pedidosProntos.data = pedidos.filter(p => p.status === StatusPedidoEnum.PRONTO); 
  }

  buildParams(status: StatusPedidoEnum[]) {
    let params = new HttpParams();
    status.forEach(s => params = params.append('status', s))
    const localDate = new Date();
    localDate.setHours(0, 0, 0, 0);
    params = params.append('dataHora', localDate.toISOString());
    return params;
  }

  aceitarPedido(pedido: PedidoDTO) {
    this.pedidoService.aceitarPedido(pedido.id!).subscribe(() => {
      this.carregarPedidos().then(() => this.alertService.showToast('Pedido Aceito!'));
    });
  }

  cancelarPedido(pedido: PedidoDTO) {
    // TODO: ADICIONAR CONFIRMAÇÃO ANTES DE CANCELAR
    this.pedidoService.cancelarPedido(pedido.id!).subscribe(() => {
      this.carregarPedidos().then(() => this.alertService.showToast('Pedido Cancelado!', 'warning'));
    });
  }

  concluirPedido(pedido: PedidoDTO) {
    this.pedidoService.concluirPedido(pedido.id!).subscribe(() => {
      this.carregarPedidos().then(() => this.alertService.showToast('Pedido Pronto!'));
    });
  }

  finalizarPedido(pedido: PedidoDTO) {
    this.pedidoService.finalizarPedido(pedido.id!).subscribe(() => {
      this.carregarPedidos().then(() => this.alertService.showToast('Pedido Finalizado!'));
    });
  }

}