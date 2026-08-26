import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { GENERAL_SPECIALITIES, SUPER_SPECIALITIES } from '../core/data/specialities';
import { SPECIALITY_DETAILS } from '../core/data/speciality-details';

@Component({
  selector: 'app-specialities',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './specialities.component.html',
  styleUrl: './specialities.component.scss'
})
export class SpecialitiesComponent {
  readonly general = GENERAL_SPECIALITIES;
  readonly supers = SUPER_SPECIALITIES;

  hasDetail(slug: string): boolean {
    return !!SPECIALITY_DETAILS[slug];
  }
}
