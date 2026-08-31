import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { findSpeciality, GENERAL_SPECIALITIES, SUPER_SPECIALITIES } from '../core/data/specialities';
import { SpecialityDetail } from '../core/models';
import { SPECIALITY_DETAILS } from '../core/data/speciality-details';
import { DOCTORS, doctorInitials } from '../core/data/doctors';
import { SITE } from '../core/data/site';

@Component({
  selector: 'app-speciality-detail',
  standalone: true,
  imports: [RouterLink, CtaBandComponent, IconComponent],
  templateUrl: './speciality-detail.component.html',
  styleUrl: './speciality-detail.component.scss'
})
export class SpecialityDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  readonly site = SITE;
  readonly doctorInitials = doctorInitials;
  readonly general = GENERAL_SPECIALITIES;
  readonly supers = SUPER_SPECIALITIES;

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: ''
  });

  readonly speciality = computed(() => findSpeciality(this.slug()));
  readonly detail = computed<SpecialityDetail | undefined>(() => SPECIALITY_DETAILS[this.slug()]);

  /** Doctors listed for this department in the hospital-wide roster. */
  readonly doctors = computed(() => {
    const name = this.speciality()?.name;
    return name ? DOCTORS.filter((d) => d.department === name) : [];
  });

  readonly openFaq = signal<number | null>(0);

  constructor() {
    // Keep the document title in step with the resolved speciality.
    this.route.paramMap.subscribe(() => {
      const spec = this.speciality();
      if (!spec) {
        return;
      }
      this.titleService.setTitle(`${spec.name} | MIMS Hospital, Vizianagaram`);
      this.meta.updateTag({ name: 'description', content: spec.summary });
      this.openFaq.set(0);
    });
  }

  toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}
