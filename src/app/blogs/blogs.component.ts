import { Component, computed, signal } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../core/data/content';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  readonly categories = BLOG_CATEGORIES;
  readonly active = signal<string>('All');

  readonly posts = computed(() => {
    const category = this.active();
    return category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);
  });

  select(category: string): void {
    this.active.set(category);
  }
}
