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
  readonly integratedModel = [
    'Multispeciality and super-speciality healthcare',
    'Medical education and clinical training',
    'Advanced diagnostic and imaging facilities',
    'Emergency and critical care services',
    'Surgical and interventional procedures',
    'Nursing and paramedical education',
    'Preventive healthcare and medical camps',
    'Healthcare services supported through government schemes and empanelments',
    'Clinical learning and research'
  ];

  readonly founderInstitutions = [
    'Sree Sitaramchandra Swamy Devasthanam, Bhadrachalam – Construction Committee',
    'Jagannath Institute for Technology & Management (JITM), Parlakhemundi',
    'Kakatiya Institute of Technology & Sciences (KITS), Warangal',
    'Alluri Institute of Management Sciences (AIMS), Warangal',
    'A.S.R. Public School, Araku Valley',
    'Chandana Agro Tech (P) Ltd, Gunupur, Odisha',
    'Warangal Public School, Warangal',
    'Alluri Trust, Warangal – Managing Trustee'
  ];

  readonly founderAwards = [
    'Rashtriya Ratan National Award – 2001',
    'Pride of India – 2002',
    'Doctorate of Philosophy in Education – 2013, AIM Westbrook University, USA'
  ];

  readonly leadership = [
    { name: 'Sri Alluri Satyanarayana Raju Garu', role: 'Chairman' },
    { name: 'Dr. B.H.V.K. Praveen Varma Garu', role: 'Managing Director & Life Time Trustee' }
  ];

  readonly trustees = [
    { name: 'Sri B. Rama Krishna Raju', role: 'Lifetime Trustee' },
    { name: 'Mr. Alluri Jitender Nath', role: 'Life Trustee' },
    { name: 'Mr. Prithvi Kalidindi', role: 'Life Trustee' },
    { name: 'Mr. GVVSN Varma', role: 'Nominated Trustee' }
  ];

  readonly facilities = [
    { icon: 'building', label: '880+ Hospital Beds' },
    { icon: 'activity', label: '15+ Clinical and Super-Specialities' },
    { icon: 'scalpel', label: '11 Fully Equipped Operation Theatres' },
    { icon: 'ambulance', label: '24×7 Emergency & Critical Care' },
    { icon: 'microscope', label: 'Advanced Diagnostic & Imaging Services' },
    { icon: 'shield', label: 'Preventive Health Check-up Packages' },
    { icon: 'users', label: 'Medical, Nursing and Paramedical Education' },
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
      text: 'Using technology, knowledge and research to continuously strengthen healthcare delivery.'
    },
    {
      title: 'Collaboration',
      text: 'Bringing together medical, nursing, technical and support teams to deliver coordinated patient care.'
    },
    {
      title: 'Community',
      text: 'Serving society through accessible healthcare, awareness, and community outreach.'
    }
  ];

  readonly trustPoints = [
    'More than two decades of service to the region',
    'Comprehensive multi-speciality and super-speciality healthcare',
    'Integrated medical education, clinical training and research',
    'Advanced surgical, critical care and diagnostic facilities',
    '24×7 emergency and critical care services',
    'Government and ESIC empanelments',
    'Railway healthcare scheme empanelment',
    'NABH Entry-Level Accreditation'
  ];
}
