import { afterNextRender, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/data/site';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-appointment-popup',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './appointment-popup.component.html',
  styleUrl: './appointment-popup.component.scss'
})
export class AppointmentPopupComponent implements OnDestroy {
  readonly site = SITE;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private previousOverflow: string | undefined;
  private previousFocus: HTMLElement | null = null;

  constructor() {
    afterNextRender(() => {
      try {
        if (sessionStorage.getItem('mims-appointment-popup-seen')) return;
      } catch { /* Still show the invitation when browser storage is unavailable. */ }
      const element = this.dialog().nativeElement;
      this.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      element.showModal();
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      try { sessionStorage.setItem('mims-appointment-popup-seen', '1'); } catch { /* Optional persistence. */ }
    });
  }

  close(): void {
    this.dialog().nativeElement.close();
    this.restoreScroll();
    this.previousFocus?.focus({ preventScroll: true });
  }

  cancel(event: Event): void {
    event.preventDefault();
    this.close();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target !== this.dialog().nativeElement) return;
    const bounds = this.dialog().nativeElement.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) this.close();
  }

  private restoreScroll(): void {
    if (this.previousOverflow !== undefined) {
      document.body.style.overflow = this.previousOverflow;
      this.previousOverflow = undefined;
    }
  }

  ngOnDestroy(): void { this.restoreScroll(); }
}
