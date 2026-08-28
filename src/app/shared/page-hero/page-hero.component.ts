import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  template: `
    <section class="page-hero" [style.backgroundImage]="'url(' + image + ')'">
      <div class="page-hero__veil"></div>
      <div class="container page-hero__inner">
        @if (eyebrow) {
          <p class="page-hero__eyebrow">{{ eyebrow }}</p>
        }
        <h1>{{ title }}</h1>
        <span class="page-hero__rule"></span>
        @if (tagline) {
          <p class="page-hero__tagline">{{ tagline }}</p>
        }
      </div>
    </section>
  `,
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {
  @Input({ required: true }) title = '';
  @Input() tagline = '';
  @Input() eyebrow = '';
  @Input() image = 'assets/images/banner-about.jpg';
}
