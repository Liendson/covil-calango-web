/* eslint-disable @typescript-eslint/naming-convention */
export enum TipoProviderAuthEnum {
  GOOGLE = 'GOOGLE',
  CREDENTIAL = 'CREDENTIAL'
}

export const fromTipoProviderAuthEnumValue = (status: string): string => {
  switch (status) {
    case TipoProviderAuthEnum.GOOGLE:
      return 'GOOGLE';
    case TipoProviderAuthEnum.CREDENTIAL:
      return 'CREDENTIAL';
    default:
      return '';
  }
};
