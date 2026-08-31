import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../shared/icon/icon.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { DIAGNOSTIC_FACILITIES, HOSPITAL_STATS, SITE } from '../core/data/site';
import { SPECIALITIES } from '../core/data/specialities';
import { BLOG_POSTS, TESTIMONIALS } from '../core/data/content';
import { DOCTORS } from '../core/data/doctors';

interface HeroSlide {
  lead: string;
  accent: string;
  text: string;
  ctaLabel: string;
  ctaLink: string;
  ctaHref?: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent, CtaBandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;

  readonly site = SITE;
  readonly stats = HOSPITAL_STATS;
  readonly facilities = DIAGNOSTIC_FACILITIES;
  readonly testimonials = TESTIMONIALS;
  readonly posts = BLOG_POSTS.slice(0, 3);

  /** The four cards the design puts beside the green panel. */
  readonly featuredSpecialities = SPECIALITIES.filter((s) =>
    ['general-medicine', 'general-surgery', 'paediatrics', 'ophthalmology'].includes(s.slug)
  );

  readonly featuredDoctors = [
    DOCTORS.find((d) => d.department === 'General Medicine'),
    DOCTORS.find((d) => d.department === 'General Surgery'),
    DOCTORS.find((d) => d.department === 'Paediatrics'),
    DOCTORS.find((d) => d.department === 'E.N.T.')
  ].filter((d): d is NonNullable<typeof d> => !!d);

  readonly reasons = [
    {
      icon: 'users',
      title: 'Experienced Specialists',
      text: 'Skilled doctors across multiple specialities and super-specialities.'
    },
    {
      icon: 'microscope',
      title: 'Advanced Diagnostic Technology',
      text: 'MRI, CT scan, ultrasound, mammography, Doppler studies, and 24×7 laboratory services.'
    },
    {
      icon: 'shield',
      title: 'Comprehensive Healthcare Services',
      text: 'Preventive health, diagnostics, surgery, rehabilitation, and emergency services under one roof.'
    },
    {
      icon: 'ambulance',
      title: '24×7 Emergency & Critical Care',
      text: 'Round-the-clock emergency and critical care backed by modern infrastructure.'
    },
    {
      icon: 'award',
      title: 'Accessible & Affordable Care',
      text: 'Empanelled under government schemes and major insurance networks for affordable care.'
    }
  ];

  readonly slides: HeroSlide[] = [
    {
      lead: 'Compassionate Care. Advanced Medicine.',
      accent: 'Trusted Healthcare.',
      text: 'Expert care with modern technology and a patient-first approach for better outcomes.',
      ctaLabel: 'Book an Appointment',
      ctaLink: '/book-appointment',
      image: 'assets/images/hero-doctor-patient.webp'
    },
    {
      lead: 'Expert Care for',
      accent: 'Every Health Journey',
      text: 'State-of-the-art diagnostics, 880+ beds, and specialists across 15+ departments.',
      ctaLabel: 'Explore Our Specialities',
      ctaLink: '/specialities',
      image: 'assets/images/hero-two-doctors.webp'
    },
    {
      lead: 'Emergency Care,',
      accent: 'When Every Moment Matters',
      text: '24×7 emergency medicine, trauma care, and critical care teams ready around the clock.',
      ctaLabel: 'Call 24×7 Emergency',
      ctaLink: '',
      ctaHref: SITE.phoneHref,
      image: 'assets/images/hero-emergency-clinician.webp'
    },
    {
      lead: 'Preventive health check-ups,',
      accent: 'for every stage of life',
      text: 'From children and working professionals to senior citizens, with packages built around real risk profiles.',
      ctaLabel: 'View Our Health Packages',
      ctaLink: '/health-checkup',
      image: 'assets/images/hero-doctor-saree.webp'
    }
  ];

  readonly active = signal(0);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.next(), 7000);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.active.set(index);
  }
}
