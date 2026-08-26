# MIMS Hospital

Website for Maharajah's Institute of Medical Sciences (MIMS Hospital), Nellimarla, Vizianagaram.
Angular 19 (standalone components, SSR + prerendering).

## Running

```bash
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/mims
```

## Project layout

One folder per page, directly under `src/app/`:

```
src/
├── assets/
│   ├── design/                 reference design PDFs (not served)
│   ├── content/                source copy documents (gitignored, not served)
│   ├── All Specialities/       source speciality + doctor documents (not served)
│   └── images/                 images used by the site (served as /assets/images)
└── app/
    ├── core/
    │   ├── data/               site details, doctors, specialities, page copy
    │   ├── layout/             header + footer
    │   └── models/             shared interfaces
    ├── shared/                 page-hero, cta-band, icon
    ├── home/  about-us/  specialities/  speciality-detail/  doctors/
    ├── health-checkup/  physiotherapy/  government-schemes/
    ├── blogs/  events/  careers/  contact-us/  book-appointment/
    ├── app.routes.ts           every page is registered here
    └── app.config.ts
```

## Adding a page

1. Create the folder and component:

   ```bash
   npx ng generate component my-page --standalone --flat=false
   ```

2. Register it in [`src/app/app.routes.ts`](src/app/app.routes.ts):

   ```ts
   {
     path: 'my-page',
     loadComponent: () => import('./my-page/my-page.component').then((m) => m.MyPageComponent),
     title: 'My Page | MIMS Hospital'
   },
   ```

3. If it should appear in the menu, add it to `MAIN_NAV` (or `FOOTER_LINKS`) in
   [`src/app/core/data/site.ts`](src/app/core/data/site.ts).

## Design system

Brand tokens, buttons, cards, section headings, form fields and the shared page blocks all live in
[`src/styles.scss`](src/styles.scss) as CSS custom properties and utility classes, so page-level SCSS
stays small. Colours and spacing are taken from the approved design in `src/assets/design/`.

## Content

Page copy, the speciality departments and the doctor roster are data, not markup:

- `core/data/site.ts` — address, phone, email, navigation, hospital statistics
- `core/data/specialities.ts` — the 20 departments (name, group, summary, icon, image)
- `core/data/speciality-details.ts` — full department pages (services, symptoms, conditions,
  treatments, diagnostics, FAQs) for the six departments with supplied documents
- `core/data/doctors.ts` — the 88-doctor roster grouped by department
- `core/data/content.ts` — blogs, testimonials, health packages, schemes and insurance partners

## Known gaps

- The enquiry and appointment forms have no backend. They validate, then hand the message to the
  visitor's mail client addressed to the hospital's enquiry inbox. Wire them to a real endpoint
  before launch.
- Doctor photographs are placeholders — replace `assets/images/doctor-placeholder.png` usage with
  real portraits when available.
- Fourteen of the twenty departments have summary content only; the six with supplied documents
  (General Medicine, General Surgery, Paediatrics, Pulmonary Medicine, E.N.T., Psychiatry) have full
  department pages.
