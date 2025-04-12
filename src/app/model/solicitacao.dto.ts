import { ComandaDTO } from './comanda.dto';

export class SolicitacaoDTO {
  public id?: number;
  public sessionId?: string;
  public nome?: string;
  public comanda?: ComandaDTO;
}
