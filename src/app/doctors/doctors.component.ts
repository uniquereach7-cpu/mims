import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { DOCTORS, DOCTOR_DEPARTMENTS, doctorInitials } from '../core/data/doctors';
import { SPECIALITIES } from '../core/data/specialities';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, CtaBandComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  readonly departments = DOCTOR_DEPARTMENTS;
  readonly total = DOCTORS.length;
  readonly totalDepartments = DOCTOR_DEPARTMENTS.length;
  readonly detailedProfiles = DOCTORS.filter((doctor) => doctor.qualifications).length;
  readonly initials = doctorInitials;

  readonly filter = signal<string>('All');
  readonly query = signal<string>('');

  readonly visible = computed(() => {
    const dept = this.filter();
    const q = this.query().trim().toLowerCase();
    return DOCTORS.filter(
      (d) =>
        (dept === 'All' || d.department === dept) &&
        (!q ||
          d.name.toLowerCase().includes(q) ||
          d.department.toLowerCase().includes(q) ||
          d.designation?.toLowerCase().includes(q) ||
          d.qualifications?.toLowerCase().includes(q))
    );
  });

  /** Groups the visible doctors by department for the listing. */
  readonly grouped = computed(() => {
    const map = new Map<string, typeof DOCTORS>();
    for (const doctor of this.visible()) {
      const list = map.get(doctor.department) ?? [];
      list.push(doctor);
      map.set(doctor.department, list);
    }
    return Array.from(map, ([department, doctors]) => ({ department, doctors }))
      .sort((a, b) => a.department.localeCompare(b.department, 'en'));
  });

  readonly whyPoints = [
    'Experienced Specialists',
    'Multidisciplinary Approach',
    'Evidence-Based Treatment',
    'Personalised Care Plans',
    'Comprehensive Follow-Up Care'
  ];

  setFilter(department: string): void {
    this.filter.set(department);
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  /** Links a department back to its speciality page when one exists. */
  specialitySlug(department: string): string | null {
    if (department === 'Emergency & Critical Care') {
      return 'emergency-care';
    }
    return SPECIALITIES.find((s) => s.name === department)?.slug ?? null;
  }
}
