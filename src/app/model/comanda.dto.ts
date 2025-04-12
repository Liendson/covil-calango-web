import { UsuarioDTO } from './usuario.dto';

export class ComandaDTO {
  public id?: number;
  public numero?: number | string;
  public usuario?: UsuarioDTO;
  public dataHoraEntrada?: Date;
  public dataHoraSaida?: Date;
  public status?: string;
}
