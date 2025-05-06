/* eslint-disable @typescript-eslint/naming-convention */
export enum StatusSolicitacaoEnum {
  EM_ANALISE = 'EM_ANALISE',
  ACEITA = 'ACEITA',
  RECUSADA = 'RECUSADA'
}

export const fromStatusSolicitacaoEnumValue = (status: string): string => {
  switch (status) {
    case StatusSolicitacaoEnum.EM_ANALISE:
      return 'Em Análise';
    case StatusSolicitacaoEnum.ACEITA:
      return 'Aceita';
    case StatusSolicitacaoEnum.RECUSADA:
      return 'Recusada';
    default:
      return '';
  }
};
