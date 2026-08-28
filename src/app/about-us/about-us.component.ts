import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  readonly story = [
    {
      title: 'Building a Legacy of Service',
      text: 'Established in 2003 by the Sri Rama Educational Trust, Maharajah’s Institute of Medical Sciences has grown into one of the most respected medical institutions in Uttarandhra, serving Vizianagaram, neighbouring districts of Andhra Pradesh, and parts of Odisha. Located in Nellimarla, MIMS was founded with a vision to make quality healthcare and medical education accessible to communities that previously had limited access to advanced medical facilities.'
    },
    {
      title: 'Caring for Communities',
      text: 'Over the years, MIMS has evolved into a comprehensive centre for patient care, medical education, research, and community outreach. Through advanced clinical services, preventive healthcare initiatives, government healthcare schemes, and numerous medical camps, the institution has positively impacted thousands of lives across the region.'
    },
    {
      title: 'Excellence in Medical Education',
      text: 'As one of the region’s leading medical colleges and teaching hospitals, MIMS is committed to nurturing future healthcare professionals through rigorous academic training, clinical exposure, research opportunities, and a culture of excellence. The institution is widely recognised for its academic standards, disciplined learning environment, and commitment to producing skilled, compassionate medical practitioners.'
    }
  ];

  readonly facilities = [
    { icon: 'building', label: '880+ Hospital Beds' },
    { icon: 'activity', label: '15 Clinical Departments' },
    { icon: 'scalpel', label: '11 Fully Equipped Operation Theatres' },
    { icon: 'ambulance', label: '24×7 Emergency & Trauma Care' },
    { icon: 'microscope', label: 'Advanced Diagnostic & Imaging Services' },
    { icon: 'shield', label: 'Preventive Health Check‑up Packages' },
    { icon: 'award', label: 'Government Scheme & Insurance Empanelments' }
  ];

  readonly values = [
    { title: 'Compassion', text: 'Caring for every patient with empathy, respect, and dignity.' },
    {
      title: 'Excellence',
      text: 'Striving for the highest standards in healthcare, education, and research.'
    },
    {
      title: 'Integrity',
      text: 'Acting with honesty, transparency, and accountability in all that we do.'
    },
    {
      title: 'Innovation',
      text: 'Leveraging technology and research to continuously improve patient outcomes.'
    },
    {
      title: 'Collaboration',
      text: 'Working together across disciplines to provide holistic and coordinated care.'
    },
    {
      title: 'Community',
      text: 'Serving society through accessible healthcare, awareness, and outreach initiatives.'
    }
  ];

  readonly trustPoints = [
    'Compassionate Care',
    'Experienced Specialists',
    'Advanced Diagnostic Facilities',
    '24×7 Emergency Support',
    'Affordable Treatment Options',
    'Government Scheme Empanelment',
    'Community-Focused Healthcare'
  ];

  readonly services = [
    {
      title: 'Emergency Care',
      text: '24/7 emergency services with rapid response and expert medical support.',
      image: 'assets/images/service-emergency.jpg'
    },
    {
      title: 'Outpatient Services',
      text: 'Quick consultations, diagnosis, and treatment without hospital admission.',
      image: 'assets/images/service-outpatient.jpg'
    },
    {
      title: 'Inpatient Care',
      text: 'Comfortable stay with continuous monitoring and personalised treatment.',
      image: 'assets/images/service-inpatient.jpg'
    },
    {
      title: 'Pharmacy Services',
      text: 'In-house pharmacy providing convenient access to essential medicines.',
      image: 'assets/images/service-pharmacy.jpg'
    }
  ];
}
