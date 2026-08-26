import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  readonly initiatives = [
    { icon: 'stethoscope', title: 'Free Medical Camps', text: 'Specialist consultations and health screenings.' },
    { icon: 'hormone', title: 'Diabetes Awareness Programmes', text: 'Education and screening initiatives.' },
    { icon: 'heart', title: 'Heart Health Campaigns', text: 'Preventive cardiac health awareness.' },
    { icon: 'pregnancy', title: 'Women’s Health Programmes', text: 'Cancer screening and preventive healthcare.' },
    { icon: 'baby', title: 'Child Health Initiatives', text: 'Vaccination and developmental awareness programmes.' },
    { icon: 'eye', title: 'Eye Care Camps', text: 'Cataract screening and vision care under DBCS initiatives.' },
    { icon: 'activity', title: 'Blood Donation Drives', text: 'Supporting lifesaving community needs.' }
  ];
}
