import { Component } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { SITE } from '../core/data/site';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  readonly site = SITE;

  readonly benefits = [
    { icon: 'award', title: 'Professional Growth', text: 'Continuous learning and development opportunities.' },
    { icon: 'users', title: 'Collaborative Environment', text: 'Work alongside experienced specialists and healthcare professionals.' },
    { icon: 'microscope', title: 'Advanced Infrastructure', text: 'Access to modern technology and healthcare systems.' },
    { icon: 'heart', title: 'Patient-Centred Culture', text: 'Be part of a team committed to compassionate care.' },
    { icon: 'building', title: 'Community Impact', text: 'Serve and improve the health of communities across Andhra Pradesh.' }
  ];
}
