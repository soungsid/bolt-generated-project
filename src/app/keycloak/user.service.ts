import { Injectable, computed, inject, signal } from '@angular/core';
import { ANONYMOUS_USER, UserProfile } from '../model/user-profile';
import Keycloak from 'keycloak-js';
import { environment } from 'environments/environment';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private readonly _store = signal({userProfile : ANONYMOUS_USER});


  public keycloak: Keycloak | undefined;
  profile =  computed(() => this._store().userProfile);
  isLoggedIn = computed(()  => !this.profile().anonymous)
  setUserProfile(up: UserProfile) {
    this._store.update((s) => ({ ...s, userProfile: up }));
  }

  constructor() { }

  async init(): Promise<void> {
 
    if (typeof window === 'undefined') {
      return;
    }
 


    try {
      const { default: Keycloak } = await import('keycloak-js');

      const config = environment.keycloak
      console.log( "test ks")
      console.log(config)

      this.keycloak = new Keycloak(config);

      const authenticated = await this.keycloak.init({
        checkLoginIframe: false,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + "/assets/keycloak/silent-check-sso.html",
      });
      console.log('Keycloak initialized  successfully');

      if (authenticated) {
        let up = (await this.keycloak.loadUserProfile()) as UserProfile;
        up.token = this.keycloak.token || '';
        up.anonymous = false;
        this.setUserProfile(up);
      }
    } catch (error) {
      console.error('Failed to initialize Keycloak', error);
      throw error; // Rejeter l'erreur pour que l'appelant puisse la gérer
    }
  }

  login() {
    this.setUserProfile(ANONYMOUS_USER);
    return this.keycloak?.login();
  }

  subscribe() {
    return this.keycloak?.register();
  }

  logout(event : Event) {
    console.log(event)
    event?.preventDefault();
    this.setUserProfile(ANONYMOUS_USER);
    return this.keycloak?.logout({redirectUri:  window.location.origin});
  }
}
