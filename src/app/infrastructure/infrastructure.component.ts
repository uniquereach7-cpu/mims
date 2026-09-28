import { Component } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  readonly teachingBeds = [
    { department: 'Medicine', beds: 180 },
    { department: 'Surgery', beds: 150 },
    { department: 'Obstetrics & Gynaecology', beds: 120 },
    { department: 'Orthopaedics', beds: 90 },
    { department: 'Paediatrics', beds: 90 },
    { department: 'Ophthalmology', beds: 60 },
    { department: 'ENT', beds: 40 },
    { department: 'Dermatology', beds: 40 },
    { department: 'TB & Respiratory Diseases', beds: 30 },
    { department: 'Psychiatry', beds: 30 },
    { department: 'Emergency Medicine', beds: 30 }
  ];

  readonly criticalCare = [
    { label: 'Casualty', value: '7 Beds' },
    { label: 'Total ICU', value: '25 Beds' },
    { label: 'CTICU', value: '10 Beds' },
    { label: 'Cath ICU', value: '8 Beds' }
  ];

  readonly accommodation = [
    { label: 'Single Rooms', value: '25' },
    { label: 'Sharing Rooms', value: '4' },
    { label: 'Deluxe Rooms', value: '4' },
    { label: 'Suite Rooms', value: '4' }
  ];

  readonly theatres = [
    { value: '3', label: 'Advanced Operating Theatres' },
    { value: '2', label: 'Laminar Flow Operating Theatres' },
    { value: '1', label: 'Modular Operating Theatre' }
  ];

  readonly specialisedFacilities = [
    {
      icon: 'kidney',
      title: 'Nephrology – Advanced Dialysis Unit',
      text: 'MIMS provides haemodialysis services supported by modern dialysis infrastructure and specialist nephrology care.',
      services: [
        'Comprehensive haemodialysis services',
        'Continuous patient monitoring',
        'Infection-control practices',
        'Individualised treatment plans',
        'Specialist nephrology support'
      ],
      doctors: [
        {
          name: 'Dr. Jayasree Lakshmi',
          qualifications: 'MBBS, MD (General Medicine), DM (Nephrology)',
          role: 'Consultant Nephrologist | Full-Time In-House Consultant'
        },
        {
          name: 'Dr. K. Kalyan Chakravarthy',
          qualifications: 'MBBS, MD, DM (Nephrology)',
          role: 'Chief Consultant Nephrologist'
        }
      ]
    },
    {
      icon: 'stomach',
      title: 'Medical Gastroenterology – Advanced Endoscopy Lab',
      text: 'The Advanced Endoscopy Lab supports the diagnosis and treatment of gastrointestinal conditions through modern endoscopic techniques.',
      services: [
        'Diagnostic and therapeutic endoscopy',
        'Evaluation of gastrointestinal conditions',
        'Specialist-led GI care',
        'Advanced equipment and procedure-based treatment'
      ],
      doctors: [
        {
          name: 'Dr. B.V.V. Shiva Kiran',
          qualifications: 'MBBS, MD, DM (Medical Gastroenterology)',
          role: 'Consultant Gastroenterologist'
        }
      ]
    },
    {
      icon: 'pregnancy',
      title: 'Obstetrics & Gynaecology – Supporting Women’s Health Through Every Stage',
      text: 'MIMS provides specialist obstetric and gynaecological services supported by dedicated infrastructure.',
      services: [
        'Advanced Gynaecology OT',
        'Maternal and foetal care',
        'Pregnancy and delivery care',
        'High-risk pregnancy management',
        'Emergency obstetric services',
        'Comprehensive women’s healthcare'
      ],
      doctors: [
        {
          name: 'Dr. G. Spoorthi',
          qualifications: 'MBBS, MS (OBG)',
          role: 'Consultant Gynaecologist'
        }
      ]
    }
  ];
}
