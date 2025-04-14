import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material.module';
import { ComandaService } from 'src/app/services/http-services/comanda.service';
import { HttpParams } from '@angular/common/http';
import { fromStatusComandaEnumValue, StatusComandaEnum } from 'src/app/enums/status-comanda.enum';
import { lastValueFrom } from 'rxjs';
import { ComandaDTO } from 'src/app/model/comanda.dto';

@Component({
  selector: 'app-comandas-abertas',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MaterialModule],
  templateUrl: './comandas-abertas.component.html',
})
export class ComandasAbertasComponent {
  public displayedColumns: string[] = ['nome', 'numero', 'valor', 'hora'];
  public comandas: ComandaDTO[] = [];

  constructor(private comandaService: ComandaService) {
    this.obterComandasAbertas();
  }

  async obterComandasAbertas() {
    this.comandas = await lastValueFrom(this.comandaService.getAllByParams(this.buildParams()));
  }

  buildParams() {
    let params = new HttpParams();
    params = params.append('status', fromStatusComandaEnumValue(StatusComandaEnum.ABERTA));
    const localDate = new Date();
    localDate.setHours(0, 0, 0, 0);
    params = params.append('dataHoraEntrada', localDate.toISOString());
    return params;
  }
}
