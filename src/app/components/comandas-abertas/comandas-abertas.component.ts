import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material.module';

const ELEMENT_DATA: any[] = [
  {
    id: 4,
    nome: 'Liendson Douglas',
    numero: '12345',
    valor: '74',
    hora: new Date(),
  },
  {
    id: 4,
    nome: 'Leonardo Donato',
    numero: '12345',
    valor: '50',
    hora: new Date(),
  },
  {
    id: 4,
    nome: 'Maria Rita',
    numero: '123456',
    valor: '23',
    hora: new Date(),
  },
  {
    id: 4,
    nome: 'Altayr Franco',
    numero: '1234567',
    valor: '61',
    hora: new Date(),
  },
];

@Component({
  selector: 'app-comandas-abertas',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MaterialModule],
  templateUrl: './comandas-abertas.component.html',
})
export class ComandasAbertasComponent {
  displayedColumns: string[] = ['nome', 'numero', 'valor', 'hora'];
  dataSource = ELEMENT_DATA;
}
