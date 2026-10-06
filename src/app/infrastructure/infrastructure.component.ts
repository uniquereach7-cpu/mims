import { Component } from '@angular/core';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { DIAGNOSTIC_FACILITIES } from '../core/data/site';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  readonly diagnostics = DIAGNOSTIC_FACILITIES;

  readonly rooms = [
    {
      name: 'Single Rooms',
      title: 'Private Accommodation for Greater Privacy & Convenience',
      amenities: [
        'Private room designed to provide greater personal space and privacy',
        'Dedicated patient bed with essential bedside facilities',
        'Convenient arrangements for attendants',
        'Comfortable and well-organised environment for recovery'
      ]
    },
    {
      name: 'Sharing Rooms',
      title: 'Practical Shared Accommodation for Patient Comfort',
      amenities: [
        'Shared accommodation with dedicated patient beds',
        'Essential bedside facilities for routine patient requirements',
        'Well-planned space for patients and attendants',
        'Comfortable environment during the hospital stay'
      ]
    },
    {
      name: 'Deluxe Rooms',
      title: 'Enhanced Accommodation with Added Comfort & Convenience',
      amenities: [
        'Spacious room designed for enhanced patient comfort',
        'Dedicated patient area with attendant seating',
        'Essential bedside and medical utility facilities',
        'Well-organised environment to support a comfortable stay'
      ]
    },
    {
      name: 'Suite Rooms',
      title: 'Spacious Private Accommodation for Enhanced Comfort & Privacy',
      amenities: [
        'Spacious private accommodation offering greater comfort and privacy',
        'Dedicated patient area with convenient attendant seating',
        'In-room amenities for added convenience during the stay',
        'Calm and well-organised environment for patients and attendants'
      ]
    }
  ];

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
