export class UsuarioDTO {
  public id?: number;
  public nome?: string;
  public contato?: number;
  public token?: string;

  constructor(id: number, nome: string, contato: number, token: string) {
    this.id = id;
    this.nome = nome;
    this.contato = contato;
    this.token = token;
  }
}
