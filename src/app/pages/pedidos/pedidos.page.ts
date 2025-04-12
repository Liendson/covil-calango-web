import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CardPedidosComponent } from 'src/app/components/card-pedidos/card-pedidos.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pedidos',
  imports: [MaterialModule, CardPedidosComponent, TablerIconsModule],
  templateUrl: './pedidos.page.html',
  encapsulation: ViewEncapsulation.None,
})
export class PedidosPage {

  public displayedColumns: string[] = ['pedido', 'quantidade', 'numero', 'cliente', 'acoes'];
  public solicitacoes = new MatTableDataSource<any>([]);
}