import { Routes } from '@angular/router';

/**
 * One folder per page under `src/app/`.
 * To add a page: create the folder + component, then add a line below.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    title: 'MIMS Hospital – Advanced Multi‑Speciality Healthcare in Vizianagaram'
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
    title: 'About Us | MIMS Hospital, Vizianagaram'
  },
  {
    path: 'specialities',
    loadComponent: () =>
      import('./specialities/specialities.component').then((m) => m.SpecialitiesComponent),
    title: 'Our Specialities | MIMS Hospital'
  },
  {
    path: 'specialities/:slug',
    loadComponent: () =>
      import('./speciality-detail/speciality-detail.component').then(
        (m) => m.SpecialityDetailComponent
      )
  },
  {
    path: 'doctors',
    loadComponent: () => import('./doctors/doctors.component').then((m) => m.DoctorsComponent),
    title: 'Our Doctors | MIMS Hospital'
  },
  {
    path: 'health-checkup',
    loadComponent: () =>
      import('./health-checkup/health-checkup.component').then((m) => m.HealthCheckupComponent),
    title: 'Health Check‑up Packages | MIMS Hospital'
  },
  {
    path: 'physiotherapy',
    loadComponent: () =>
      import('./physiotherapy/physiotherapy.component').then((m) => m.PhysiotherapyComponent),
    title: 'Physiotherapy & Rehabilitation | MIMS Hospital'
  },
  {
    path: 'government-schemes',
    loadComponent: () =>
      import('./government-schemes/government-schemes.component').then(
        (m) => m.GovernmentSchemesComponent
      ),
    title: 'Insurance & Government Schemes | MIMS Hospital'
  },
  {
    path: 'infrastructure',
    loadComponent: () =>
      import('./infrastructure/infrastructure.component').then(
        (m) => m.InfrastructureComponent
      ),
    title: 'Hospital Infrastructure & Facilities | MIMS Hospital'
  },
  {
    path: 'blogs',
    loadComponent: () => import('./blogs/blogs.component').then((m) => m.BlogsComponent),
    title: 'Health Blogs & Insights | MIMS Hospital'
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.component').then((m) => m.EventsComponent),
    title: 'Events & Community Initiatives | MIMS Hospital'
  },
  {
    path: 'careers',
    loadComponent: () => import('./careers/careers.component').then((m) => m.CareersComponent),
    title: 'Careers | MIMS Hospital'
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then((m) => m.ContactUsComponent),
    title: 'Contact Us | MIMS Hospital'
  },
  {
    path: 'book-appointment',
    loadComponent: () =>
      import('./book-appointment/book-appointment.component').then(
        (m) => m.BookAppointmentComponent
      ),
    title: 'Book an Appointment | MIMS Hospital'
  },
  { path: '**', redirectTo: '' }
];
