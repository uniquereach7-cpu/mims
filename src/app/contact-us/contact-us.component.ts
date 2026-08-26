import { Component, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { IconComponent } from '../shared/icon/icon.component';
import { SITE } from '../core/data/site';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, PageHeroComponent, IconComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);

  readonly site = SITE;
  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  readonly cards = [
    { icon: 'phone', title: 'Phone', value: SITE.phone, href: SITE.phoneHref },
    { icon: 'mail', title: 'Email', value: SITE.email, href: SITE.emailHref },
    { icon: 'clock', title: 'Working Hours', value: SITE.opdHours, href: '' }
  ];

  invalid(control: 'name' | 'email' | 'message'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.dirty || field.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    // No enquiry backend is wired up yet, so hand the message to the visitor's
    // mail client addressed to the hospital's published enquiry inbox.
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `${SITE.emailHref}?subject=${subject}&body=${body}`;
    }

    this.sent.set(true);
  }
}
