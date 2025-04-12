import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CardPedidosComponent } from 'src/app/components/card-pedidos/card-pedidos.component';
import { ProximosPedidosComponent } from 'src/app/components/proximos-pedidos/proximos-pedidos.component';
import { ComandasAbertasComponent } from 'src/app/components/comandas-abertas/comandas-abertas.component';

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
export class DashboardPage { }