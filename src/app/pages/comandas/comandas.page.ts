import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { ComandaDTO } from 'src/app/model/comanda.dto';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { ComandaService } from 'src/app/services/http-services/comanda.service';
import { AlertService } from 'src/app/services/alert.service';
import { lastValueFrom } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { fromStatusComandaEnumValue, StatusComandaEnum } from 'src/app/enums/status-comanda.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalharComandaModal } from './detalhar-comanda-modal/detalhar-comanda.modal';
import { PedidoService } from 'src/app/services/http-services/pedidos.service';

@Component({
  selector: 'app-comandas',
  imports: [CommonModule, MaterialModule, TablerIconsModule],
  templateUrl: './comandas.page.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComandasPage implements OnInit {

  public displayedColumns: string[] = ['numero', 'cliente', 'horaEntrada', 'valorTotal', 'acoes'];
  public comandasAbertas = new MatTableDataSource<ComandaDTO>([]);

  constructor(
    private comandaService: ComandaService,
    private pedidoService: PedidoService,
    private alertService: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.obterComandasAbertas();
  }

  async obterComandasAbertas() {
    this.comandasAbertas.data = await lastValueFrom(this.comandaService.getAllByParams(this.buildParams()));
  }
  
  buildParams() {
    let params = new HttpParams();
    params = params.append('status', fromStatusComandaEnumValue(StatusComandaEnum.ABERTA));
    const localDate = new Date();
    localDate.setHours(0, 0, 0, 0);
    params = params.append('dataHoraEntrada', localDate.toISOString());
    return params;
  }

  abrirModalDetalharComanda(comanda: ComandaDTO) {
    this.comandaService.getByNumero(comanda.numero).subscribe(res => {
      const modalRef = this.modalService.open(DetalharComandaModal, { animation: true, size: 'lg' });
      modalRef.componentInstance.comanda = res;
      modalRef.result.then(r => {
        if (r) {
          this.obterComandasAbertas();
        }
      })
    })
  }

  fecharComanda(comanda: ComandaDTO) {
    this.alertService.showConfirmation('Alerta!', 'Tem certeza que deseja fechar a comanda?', () => {
      this.comandaService.fecharComanda(comanda.numero).subscribe(() => {
        this.alertService.showSuccess('Sucesso!', `Comanda ${comanda.numero} fechada com sucesso!`);
        this.obterComandasAbertas();
      })
    })
  }

}