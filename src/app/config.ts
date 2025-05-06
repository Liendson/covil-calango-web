import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialAuthServiceConfig } from "angularx-social-login";
import { environment } from "src/environments/environment";

export interface AppSettings {
  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
}

export const defaults: AppSettings = {
  sidenavOpened: false,
  sidenavCollapsed: false,
};

export const socialAuthServiceConfig = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(environment.googleClientId)
      }
    ],
    onError: (error: any) => {
      console.error(error);
    }
  } as SocialAuthServiceConfig,
}
