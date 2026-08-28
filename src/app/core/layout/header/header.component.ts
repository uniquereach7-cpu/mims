import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  inject,
  signal
} from '@angular/core';
import { NgClass, isPlatformBrowser } from '@angular/common';
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
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeObserver?: ResizeObserver;

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

  /**
   * Page heroes tuck under the floating bar with a negative margin, so they need
   * the bar's real height — which changes with the breakpoint and the scrolled
   * state. Publish it instead of hard-coding a guess.
   */
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const publish = () =>
      document.documentElement.style.setProperty(
        '--header-h',
        `${this.host.nativeElement.offsetHeight}px`
      );
    publish();
    this.resizeObserver = new ResizeObserver(publish);
    this.resizeObserver.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
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
