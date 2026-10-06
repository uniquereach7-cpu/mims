import { Component, inject, signal } from '@angular/core';
import { sendForm } from '../core/form-mail';
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

  readonly site = SITE;
  readonly departments = SPECIALITIES.map((s) => s.name);
  readonly sent = signal(false);
  readonly sending = signal(false);
  readonly error = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+0-9][0-9 ()-]{7,17}$/)]],
    department: ['', Validators.required],
    date: [''],
    message: ['', Validators.maxLength(5000)],
    website: ['']
  });

  invalid(control: 'name' | 'phone' | 'department'): boolean {
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
      await sendForm('appointment', this.form.getRawValue());
      this.sent.set(true);
    } catch (error) {
      this.error.set(error instanceof Error && error.name !== 'TimeoutError'
        ? error.message : 'We could not confirm your submission. Please call the hospital.');
    } finally {
      this.sending.set(false);
    }
  }
}
