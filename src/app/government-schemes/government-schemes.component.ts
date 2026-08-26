import { Component } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { GOVERNMENT_SCHEMES, INSURANCE_PARTNERS } from '../core/data/content';
import { SITE } from '../core/data/site';

@Component({
  selector: 'app-government-schemes',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './government-schemes.component.html',
  styleUrl: './government-schemes.component.scss'
})
export class GovernmentSchemesComponent {
  readonly site = SITE;
  readonly schemes = GOVERNMENT_SCHEMES;
  readonly partners = INSURANCE_PARTNERS;

  readonly support = [
    'Cashless approvals',
    'Insurance documentation',
    'Claim processing support',
    'Scheme eligibility guidance'
  ];
}
