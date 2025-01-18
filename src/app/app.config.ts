import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserService } from './keycloak/user.service';

export function kcFactory(keycloakService : UserService)
{
  return () => keycloakService.init();
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideHttpClient(withFetch()), {
    provide:APP_INITIALIZER, 
    deps: [UserService],
    useFactory: kcFactory,
    multi: true
  }]
};
