/* eslint-disable @typescript-eslint/naming-convention */
export enum StatusPedidoEnum {
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  PRONTO = 'PRONTO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO'
}

export const fromStatusPedidoEnumValue = (status: string): string | null => {
  switch (status) {
    case StatusPedidoEnum.EM_ANDAMENTO:
      return 'Em Andamento';
    case StatusPedidoEnum.PRONTO:
      return 'Pronto';
    case StatusPedidoEnum.FINALIZADO:
      return 'Finalizado';
    case StatusPedidoEnum.CANCELADO:
      return 'Cancelado';
    default:
      return null;
  }
};
