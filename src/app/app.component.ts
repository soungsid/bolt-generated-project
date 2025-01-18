import { Component, OnInit, afterNextRender, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { UserService } from './keycloak/user.service';
import { HeaderComponent } from "./shared/header/header.component";
import { initFlowbite } from 'flowbite';
import { ThemeService } from './theme.service';
import { KeycloakAngularModule } from 'keycloak-angular';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterModule, HeaderComponent]
})
export class AppComponent{
  
  constructor (public userService : UserService, private themeService: ThemeService) {
   
    afterNextRender(() => {
      initFlowbite();
      this.themeService.loadTheme();
    })
  }
  title = 'quiz-angular';
}
