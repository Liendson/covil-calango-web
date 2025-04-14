/* eslint-disable @typescript-eslint/naming-convention */
export enum StatusComandaEnum {
  ABERTA = 'ABERTA',
  EM_ANALISE = 'EM_ANALISE',
  FECHADA = 'FECHADA'
}

export const fromStatusComandaEnumValue = (status: string): string => {
  switch (status) {
    case StatusComandaEnum.ABERTA:
      return 'Aberta';
    case StatusComandaEnum.EM_ANALISE:
      return 'Em Análise';
    case StatusComandaEnum.FECHADA:
      return 'Fechada';
    default:
      return '';
  }
};
