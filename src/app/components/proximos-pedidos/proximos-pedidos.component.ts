import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-proximos-pedidos',
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],
  templateUrl: './proximos-pedidos.component.html',
})
export class ProximosPedidosComponent {

  constructor() { }

  pedidos: any[] = [
    {
      id: 1,
      time: '09.30 am',
      color: 'primary',
      title: '1x Porção de Batatas Rústicas',
      link: '#Comanda 23',
    },
    {
      id: 2,
      time: '10.30 am',
      color: 'warning',
      title: '1x Refrigerante Lata',
      link: '#Comanda 23',
    },
    {
      id: 3,
      time: '10.30 am',
      color: 'warning',
      title: '1x Refrigerante Lata',
      link: '#Comanda 23',
    },
  ];
}
