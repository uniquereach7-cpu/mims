import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Line-icon set used for the speciality cards. Every path is drawn on a
 * 24×24 grid and inherits `currentColor` so it can sit on any brand surface.
 */
const PATHS: Record<string, string> = {
  stethoscope:
    '<path d="M6 3v5a4 4 0 0 0 8 0V3M5 3h2M13 3h2M10 12v3a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-2"/><circle cx="19" cy="12" r="2"/>',
  scalpel: '<path d="M4 20 14 10M14 10l6-7v6l-6 5-3-1z"/><path d="M4 20h4"/>',
  baby: '<circle cx="12" cy="6" r="3"/><path d="M12 9v5M12 14l-4 6M12 14l4 6M7 12h10"/>',
  lungs:
    '<path d="M12 3v9"/><path d="M12 12c0-2-1.6-3-3-3-2.6 0-5 3.6-5 7v3a2 2 0 0 0 2.6 1.9l3.4-1.1A2 2 0 0 0 12 19z"/><path d="M12 12c0-2 1.6-3 3-3 2.6 0 5 3.6 5 7v3a2 2 0 0 1-2.6 1.9l-3.4-1.1A2 2 0 0 1 12 19z"/>',
  ear: '<path d="M8 20c0-3-2-3-2-8a6 6 0 1 1 12 0c0 3-3 3-3 6a2.5 2.5 0 0 1-4.6 1.3"/><path d="M9.5 9a2.5 2.5 0 1 1 5 0c0 1.5-1.6 2-1.6 3.5"/>',
  brain:
    '<path d="M9.5 4a2.5 2.5 0 0 0-2.4 3.2A2.6 2.6 0 0 0 5 9.7a2.6 2.6 0 0 0 1 2A2.7 2.7 0 0 0 7 16a2.6 2.6 0 0 0 2.5 2.4V4z"/><path d="M14.5 4a2.5 2.5 0 0 1 2.4 3.2A2.6 2.6 0 0 1 19 9.7a2.6 2.6 0 0 1-1 2 2.7 2.7 0 0 1-1 4.3 2.6 2.6 0 0 1-2.5 2.4V4z"/><path d="M12 4v16"/>',
  pregnancy:
    '<circle cx="12" cy="4.5" r="2"/><path d="M12 7c-2 0-3 1.6-3 3.5V14c0 2.5 1.4 4 3.5 4S16 16.5 16 14.4 14.8 11 13 11h-1"/><path d="M9 21v-4"/>',
  ambulance:
    '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/><path d="M8.5 9.5v3M7 11h3"/>',
  heart:
    '<path d="M12 20s-7-4.4-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7-.6c0 5.2-7 12.6-7 12.6z"/><path d="M4 13h3l1.5-2.5L11 15l2-4 1.5 2H20"/>',
  spine:
    '<path d="M12 3v18"/><path d="M8 5h8M8 9h8M8 13h8M8 17h8"/>',
  eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="3"/>',
  stomach:
    '<path d="M8 4v4a4 4 0 0 0 4 4c3 0 5 2 5 4.5S15.2 21 13 21c-3.3 0-5.5-2-6-5"/><path d="M6 4h4"/>',
  kidney:
    '<path d="M10 4C6.7 4 4 7.1 4 11s2.7 7 6 7c2.1 0 2.6-1.6 3.4-3.1.7-1.3 1.7-1.6 3-1.9"/><path d="M13 11h3M20 8.5c0 4.9-2 8.5-5.5 9.5"/>',
  joint:
    '<circle cx="8" cy="8" r="3.2"/><circle cx="16" cy="16" r="3.2"/><path d="M10.3 10.3 13.7 13.7"/>',
  hormone:
    '<circle cx="12" cy="12" r="8"/><path d="M9 10.5c1.5 1.5 4.5 1.5 6 0M9 14c1.5-1.5 4.5-1.5 6 0"/>',
  hands:
    '<path d="M7 12V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M10 11V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M13 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.4 7-6 7s-6-2.8-6-6.5V11a1.5 1.5 0 0 1 3 0"/>',
  robot:
    '<rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M12 4v4M2 12v3M22 12v3"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/>',
  scan: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  phone:
    '<path d="M21 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 4.2 2 2 0 0 1 3.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6 9-6"/>',
  pin: '<path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3 19a6 6 0 0 1 12 0"/><path d="M16 5.6A3.2 3.2 0 0 1 16 11M17 14.4A6 6 0 0 1 21 19"/>',
  award: '<circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-2.6 5 2.6-1.5-7"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.3 3 8.1 7 9.5 4-1.4 7-5.2 7-9.5V6z"/><path d="M12 9v5M9.5 11.5h5"/>',
  activity: '<path d="M3 12h4l2.5-6 4 12L16 12h5"/>',
  microscope:
    '<path d="M6 20h13M9 20a6 6 0 0 0 8-5.6"/><path d="m10 5 4 4-3 3-4-4z"/><path d="M11.5 3.5 12.5 4.5M8 11l-2 2 3 3 2-2"/>',
  building:
    '<path d="M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M14 10h4a2 2 0 0 1 2 2v9"/><path d="M7.5 8h3M7.5 12h3M7.5 16h3M17 14h.01M17 18h.01"/>'
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span [innerHTML]="markup"></span>`,
  styles: [':host { display: inline-flex; line-height: 0; } span { display: inline-flex; }']
})
export class IconComponent {
  private readonly sanitizer = inject(DomSanitizer);

  private _name = '';
  private _size = 24;
  private _strokeWidth = 1.5;

  markup: SafeHtml = '';

  @Input({ required: true })
  set name(value: string) {
    this._name = value;
    this.render();
  }
  get name(): string {
    return this._name;
  }

  @Input()
  set size(value: number) {
    this._size = value;
    this.render();
  }
  get size(): number {
    return this._size;
  }

  @Input()
  set strokeWidth(value: number) {
    this._strokeWidth = value;
    this.render();
  }
  get strokeWidth(): number {
    return this._strokeWidth;
  }

  /**
   * Assembled from constants in this file only, never from user input, so the
   * sanitizer bypass is safe and keeps the paths in the SVG namespace.
   */
  private render(): void {
    const body = PATHS[this._name] ?? PATHS['activity'];
    const svg =
      `<svg width="${this._size}" height="${this._size}" viewBox="0 0 24 24" fill="none" ` +
      `stroke="currentColor" stroke-width="${this._strokeWidth}" stroke-linecap="round" ` +
      `stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
    this.markup = this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
