import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../keycloak/user.service';

export const authGuard: CanActivateFn = () => {
  /*const tokenService = inject(KeycloakService);
  const router = inject(Router);
  if (tokenService.keycloak?.isTokenExpired()) {
    router.navigate(['login']);
    return false;
  }*/
  return true;
};
