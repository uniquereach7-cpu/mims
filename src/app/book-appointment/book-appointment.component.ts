import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { IconComponent } from '../shared/icon/icon.component';
import { SITE } from '../core/data/site';
import { SPECIALITIES } from '../core/data/specialities';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, PageHeroComponent, IconComponent],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.scss'
})
export class BookAppointmentComponent {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);

  readonly site = SITE;
  readonly departments = SPECIALITIES.map((s) => s.name);
  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+0-9][0-9 ()-]{7,17}$/)]],
    department: ['', Validators.required],
    date: [''],
    message: ['']
  });

  invalid(control: 'name' | 'phone' | 'department'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.dirty || field.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, phone, department, date, message } = this.form.getRawValue();
    // No booking backend is wired up yet, so hand the request to the visitor's
    // mail client, addressed to the hospital's published enquiry inbox.
    const subject = encodeURIComponent(`Appointment request – ${department}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Department: ${department}`,
        `Preferred date: ${date || 'Not specified'}`,
        '',
        message || '(no additional notes)'
      ].join('\n')
    );

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `${SITE.emailHref}?subject=${subject}&body=${body}`;
    }

    this.sent.set(true);
  }
}
