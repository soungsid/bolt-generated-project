import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../keycloak/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UserService,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const themeToggleDarkIcon = this.el.nativeElement.querySelector('#theme-toggle-dark-icon');
      const themeToggleLightIcon = this.el.nativeElement.querySelector('#theme-toggle-light-icon');
      const themeToggleBtn = this.el.nativeElement.querySelector('#theme-toggle');

      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.renderer.removeClass(themeToggleLightIcon, 'hidden');
      } else {
        this.renderer.removeClass(themeToggleDarkIcon, 'hidden');
      }

      this.renderer.listen(themeToggleBtn, 'click', () => {
        if (themeToggleDarkIcon.classList.contains('hidden')) {
          this.renderer.removeClass(themeToggleDarkIcon, 'hidden');
          this.renderer.addClass(themeToggleLightIcon, 'hidden');
        } else {
          this.renderer.addClass(themeToggleDarkIcon, 'hidden');
          this.renderer.removeClass(themeToggleLightIcon, 'hidden');
        }

        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
            this.renderer.addClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'dark');
          } else {
            this.renderer.removeClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'light');
          }
        } else {
          if (document.documentElement.classList.contains('dark')) {
            this.renderer.removeClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'light');
          } else {
            this.renderer.addClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'dark');
          }
        }
      });
    }
  }
}
