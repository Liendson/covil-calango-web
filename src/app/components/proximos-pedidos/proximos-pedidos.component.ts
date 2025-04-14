import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { fromStatusPedidoEnumValue } from 'src/app/enums/status-pedido.enum';
import { PedidoDTO } from 'src/app/model/pedido.dto';

@Component({
  selector: 'app-proximos-pedidos',
  imports: [CommonModule, MatCardModule],
  templateUrl: './proximos-pedidos.component.html',
})
export class ProximosPedidosComponent {

  @Input()
  public pedidos: PedidoDTO[] = [];

  get pedidosOrdenados() {
    return this.pedidos.slice().sort((a, b) => new Date(a.dataHora!).getTime() - new Date(b.dataHora!).getTime());
  }

  get status() {
    return (status: string) => fromStatusPedidoEnumValue(status);
  }
  
}
