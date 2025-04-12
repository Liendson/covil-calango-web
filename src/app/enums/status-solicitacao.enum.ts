/* eslint-disable @typescript-eslint/naming-convention */
export enum StatusSolicitacaoEnum {
  EM_ANALISE = 'EM_ANALISE',
  ACEITA = 'ACEITA',
}

export const fromStatusSolicitacaoEnumValue = (status: string): string => {
  switch (status) {
    case StatusSolicitacaoEnum.EM_ANALISE:
      return 'Em Análise';
    case StatusSolicitacaoEnum.ACEITA:
      return 'Aceita';
    default:
      return '';
  }
};
