import { Component } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-physiotherapy',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.scss'
})
export class PhysiotherapyComponent {
  readonly services = [
    {
      icon: 'joint',
      title: 'Orthopaedic Rehabilitation',
      text: 'Recovery after fractures, joint replacement surgeries, and sports injuries.'
    },
    {
      icon: 'brain',
      title: 'Neurological Rehabilitation',
      text: 'Support for stroke, spinal cord injury, Parkinson’s disease, and neurological disorders.'
    },
    {
      icon: 'lungs',
      title: 'Respiratory Physiotherapy',
      text: 'Treatment for respiratory conditions affecting breathing and lung function.'
    },
    {
      icon: 'users',
      title: 'Geriatric Rehabilitation',
      text: 'Improving mobility and independence among senior citizens.'
    },
    {
      icon: 'scalpel',
      title: 'Post‑Surgical Rehabilitation',
      text: 'Helping patients regain strength and functionality after surgery.'
    }
  ];

  readonly reasons = [
    'Individualised treatment plans',
    'Evidence-based rehabilitation',
    'Inpatient and outpatient services',
    'Multidisciplinary care approach',
    'Modern therapy equipment'
  ];
}
