import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CardPedidosComponent } from 'src/app/components/card-pedidos/card-pedidos.component';
import { ProximosPedidosComponent } from 'src/app/components/proximos-pedidos/proximos-pedidos.component';
import { ComandasAbertasComponent } from 'src/app/components/comandas-abertas/comandas-abertas.component';
import { PedidoService } from 'src/app/services/http-services/pedidos.service';
import { HttpParams } from '@angular/common/http';
import { StatusPedidoEnum } from 'src/app/enums/status-pedido.enum';
import { lastValueFrom } from 'rxjs';
import { PedidoDTO } from 'src/app/model/pedido.dto';

@Component({
  selector: 'app-dashboard',
  imports: [
    MaterialModule,
    CardPedidosComponent,
    ProximosPedidosComponent,
    ComandasAbertasComponent,
  ],
  templateUrl: './dashboard.page.html',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPage implements OnInit {

  public pedidos: PedidoDTO[] = [];

  constructor(private pedidoService: PedidoService) { }

  get pedidosSolicitados() {
    return this.pedidos.filter(p => p.status === StatusPedidoEnum.SOLICITADO);
  }

  get pedidosEmAndamento() {
    return this.pedidos.filter(p => p.status === StatusPedidoEnum.EM_ANDAMENTO);
  }

  get pedidosFinalizados() {
    return this.pedidos.filter(p => p.status === StatusPedidoEnum.FINALIZADO);
  }

  ngOnInit(): void {
    this.carregarPedidos();
  }

  async carregarPedidos() {
    this.pedidos = await lastValueFrom(this.pedidoService.getAllByParams(this.buildParams()));
  }
  
  buildParams() {
    let params = new HttpParams();
    [StatusPedidoEnum.SOLICITADO, StatusPedidoEnum.EM_ANDAMENTO, StatusPedidoEnum.FINALIZADO].forEach(v => {
      params = params.append('status', v);
    })
    const localDate = new Date();
    localDate.setHours(0, 0, 0, 0);
    params = params.append('dataHora', localDate.toISOString());
    return params;
  }

}