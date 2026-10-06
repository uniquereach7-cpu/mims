import { Component, inject, signal } from '@angular/core';
import { sendForm } from '../core/form-mail';
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

  readonly site = SITE;
  readonly sent = signal(false);
  readonly sending = signal(false);
  readonly error = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    website: ['']
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

  async submit(): Promise<void> {
    if (this.sending()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.error.set('');
    try {
      await sendForm('contact', this.form.getRawValue());
      this.sent.set(true);
    } catch (error) {
      this.error.set(error instanceof Error && error.name !== 'TimeoutError'
        ? error.message : 'We could not confirm your submission. Please call the hospital.');
    } finally {
      this.sending.set(false);
    }
  }
}
