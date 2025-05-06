import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ComandaDTO } from 'src/app/model/comanda.dto';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoDTO } from 'src/app/model/pedido.dto';
import { ComandaService } from 'src/app/services/http-services/comanda.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-comandas',
  imports: [CommonModule, MaterialModule, TablerIconsModule],
  templateUrl: './detalhar-comanda.modal.html',
  encapsulation: ViewEncapsulation.None,
})
export class DetalharComandaModal {

  @Input()
  public comanda: ComandaDTO;

  @Input()
  public pedidos: PedidoDTO[] = [];

  constructor(
    private activeModal: NgbActiveModal,
    private comandaService: ComandaService,
    private alertService: AlertService
  ) { }

  close(refresh: boolean = false) {
    this.activeModal.close(refresh);
  }

  fecharComanda() {
    this.alertService.showConfirmation('Alerta!', 'Tem certeza que deseja fechar a comanda?', () => {
      this.comandaService.fecharComanda(this.comanda.numero).subscribe(() => {
        this.alertService.showToast('Sucesso!', `Comanda ${this.comanda.numero} fechada com sucesso!`);
        this.close(true);
      })
    })
  }

}