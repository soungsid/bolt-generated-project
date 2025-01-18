import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: any) { }

  loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('color-theme') === 'dark' || 
          (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.document.documentElement.classList.add('dark');
      } else {
        this.document.documentElement.classList.remove('dark');
      }
    }
  }
}
