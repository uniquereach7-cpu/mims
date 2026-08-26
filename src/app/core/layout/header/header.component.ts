import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { MAIN_NAV, SITE } from '../../data/site';
import { GENERAL_SPECIALITIES, SUPER_SPECIALITIES } from '../../data/specialities';
import { IconComponent } from '../../../shared/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly nav = MAIN_NAV;
  readonly site = SITE;
  readonly general = GENERAL_SPECIALITIES;
  readonly supers = SUPER_SPECIALITIES;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly openSubmenu = signal<string | null>(null);

  constructor(router: Router) {
    router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.menuOpen.set(false);
      this.openSubmenu.set(null);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.openSubmenu.set(null);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleSubmenu(label: string): void {
    this.openSubmenu.update((v) => (v === label ? null : label));
  }

  closeSubmenu(): void {
    this.openSubmenu.set(null);
  }
}
