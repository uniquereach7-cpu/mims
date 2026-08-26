import { NavLink } from '../models';

export const SITE = {
  name: 'MIMS Hospital',
  legalName: "Maharajah's Institute of Medical Sciences",
  tagline: 'Healthcare with ethics and compassion',
  addressLines: [
    '31-15, Near MDO Office, Nellimarla',
    'Vizianagaram District',
    'Andhra Pradesh – 535 217'
  ],
  phone: '+91 8922 244365',
  phoneHref: 'tel:+918922244365',
  email: 'mimssret@gmail.com',
  emailHref: 'mailto:mimssret@gmail.com',
  opdHours: 'Monday to Saturday, 9:00 AM – 5:00 PM',
  emergencyHours: '24 Hours a Day | 7 Days a Week',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Maharajah%27s+Institute+of+Medical+Sciences+Nellimarla+Vizianagaram'
};

export const MAIN_NAV: NavLink[] = [
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Specialities', path: '/specialities' },
  { label: 'Our Doctors', path: '/doctors' },
  {
    label: 'Resources',
    path: '/blogs',
    children: [
      { label: 'Health Check-ups', path: '/health-checkup' },
      { label: 'Physiotherapy', path: '/physiotherapy' },
      { label: 'Insurance & Schemes', path: '/government-schemes' },
      { label: 'Our Blogs', path: '/blogs' },
      { label: 'Events', path: '/events' },
      { label: 'Careers', path: '/careers' }
    ]
  },
  { label: 'Contact Us', path: '/contact-us' }
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Our Doctors', path: '/doctors' },
      { label: 'Our Specialities', path: '/specialities' },
      { label: 'Health Check-ups', path: '/health-checkup' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Our Blogs', path: '/blogs' },
      { label: 'Careers', path: '/careers' },
      { label: 'Events', path: '/events' },
      { label: 'Contact Us', path: '/contact-us' }
    ]
  }
];

export const HOSPITAL_STATS = [
  { value: '880+', label: 'Hospital Beds' },
  { value: '15+', label: 'Clinical Departments' },
  { value: '11', label: 'Operation Theatres' },
  { value: '24×7', label: 'Emergency & Laboratory' },
  { value: '30+', label: 'Insurance & Schemes' }
];

export const DIAGNOSTIC_FACILITIES = [
  'MRI (1.5 Tesla)',
  '16-Slice CT Scan',
  'Mammography',
  'Ultrasound & Colour Doppler',
  'Digital X-Ray Systems',
  'Clinical Biochemistry Laboratory',
  'Histopathology & Cytopathology',
  'Microbiology Services',
  'Immunopathology Testing'
];
