import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <section class="cta-band" [ngClass]="'cta-band--' + tone">
      <div class="container cta-band__inner">
        <div class="cta-band__text">
          <h2>{{ heading }}</h2>
          @if (text) {
            <p>{{ text }}</p>
          }
        </div>
        <div class="cta-band__actions">
          <a class="btn" [ngClass]="tone === 'green' ? 'btn--white' : 'btn--green'" [routerLink]="primaryLink">
            {{ primaryLabel }}
            <span class="btn__arrow" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </span>
          </a>
          @if (secondaryLabel) {
            <a class="btn btn--outline btn--plain" [routerLink]="secondaryLink">{{ secondaryLabel }}</a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-band.component.scss'
})
export class CtaBandComponent {
  @Input({ required: true }) heading = '';
  @Input() text = '';
  @Input() tone: 'green' | 'blue' = 'green';
  @Input() primaryLabel = 'Book an Appointment';
  @Input() primaryLink = '/book-appointment';
  @Input() secondaryLabel = 'Contact Us';
  @Input() secondaryLink = '/contact-us';
}
