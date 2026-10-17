export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
}


export const BLOG_CATEGORIES = [
  'General Health',
  'Heart Health',
  "Women's Health",
  'Child Health',
  'Respiratory Care',
  'Mental Health',
  'Digestive Health',
  'Kidney Health',
  'Preventive Healthcare'
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'preventive-health-checkups',
    title: 'Understanding Preventive Health Check‑ups: Why Every Adult Needs One',
    category: 'Preventive Healthcare',
    excerpt:
      'Routine screening picks up risk factors long before symptoms appear. Here is what a preventive health check-up covers and how often adults should book one.',
    image: 'assets/images/blog-health-checkup.jpg'
  },
  {
    slug: 'diabetes-management',
    title: 'Diabetes Management: A Comprehensive Guide to Living Well',
    category: 'General Health',
    excerpt:
      'From blood sugar monitoring and medication to nutrition and activity, a practical guide to keeping diabetes under long-term control.',
    image: 'assets/images/blog-healthy-lifestyle.jpg'
  },
  {
    slug: 'when-to-visit-emergency-room',
    title: 'When to Visit the Emergency Room: Signs You Should Never Ignore',
    category: 'General Health',
    excerpt:
      'Chest pain, sudden weakness, breathlessness, severe bleeding: the symptoms that mean you should reach an emergency department immediately.',
    image: 'assets/images/blog-preventive-care.jpg'
  },
  {
    slug: 'heart-health-in-your-40s',
    title: 'Heart Health in Your 40s: What Cardiac Screenings Can Reveal',
    category: 'Heart Health',
    excerpt:
      'Cardiac risk begins building quietly. Learn which screenings matter in your forties and what the results actually tell your doctor.',
    image: 'assets/images/care-hands.jpg'
  },
  {
    slug: 'childhood-immunisation-schedule',
    title: 'Childhood Immunisation: A Parent’s Guide to the Vaccination Schedule',
    category: 'Child Health',
    excerpt:
      'What each vaccine protects against, when it is due, and what to do if your child has missed a dose in the recommended schedule.',
    image: 'assets/images/service-inpatient.jpg'
  },
  {
    slug: 'breathing-easier-with-asthma',
    title: 'Breathing Easier: Managing Asthma and COPD Through the Seasons',
    category: 'Respiratory Care',
    excerpt:
      'Triggers change with the weather. Practical steps to keep asthma and COPD stable, and the warning signs of a flare-up that needs review.',
    image: 'assets/images/diagnostics.jpg'
  }
];


export const GOVERNMENT_SCHEMES = [
  'Dr. YSR Aarogyasri Scheme',
  'AP Employees Health Scheme (EHS)',
  'Aarogya Raksha Scheme',
  'AP Working Journalists Health Scheme (WJHS)',
  'Aarogya Bhadratha (SPF)',
  'District Blindness Control Society (DBCS)',
  'ESIC',
  'BSNL Health Scheme',
  'APEPDCL Health Scheme',
  'ECHS (Ex-Servicemen Contributory Health Scheme)'
];

export const INSURANCE_PARTNERS = [
  'Bajaj Allianz',
  'HDFC ERGO',
  'ICICI Lombard',
  'IFFCO Tokio',
  'Future Generali',
  'Cholamandalam MS',
  'Medi Assist',
  'MDIndia',
  'Raksha TPA',
  'Family Health Plan',
  'Heritage Health Services',
  'Good Health Plan',
  'Health India TPA'
];

export const HEALTH_PACKAGES = [
  {
    name: 'Master Health Check‑up',
    desc: 'A comprehensive preventive screening package designed to assess the overall functioning of vital organs and identify early signs of disease.',
    meta: 'Recommended for adults above 30 years seeking a complete health evaluation.',
    items: [] as string[]
  },
  {
    name: 'Executive Health Check‑up',
    desc: 'Designed for working professionals exposed to stress, irregular schedules, and lifestyle-related health risks.',
    meta: 'Focus areas',
    items: ['Heart Health', 'Diabetes Screening', 'Liver Function', 'Kidney Function', 'Metabolic Health']
  },
  {
    name: 'Well Women Health Check‑up',
    desc: 'Specially designed for women’s unique healthcare needs.',
    meta: 'Includes evaluation of',
    items: ['Reproductive Health', 'Hormonal Health', 'Breast Health', 'Bone Health', 'General Wellness']
  },
  {
    name: 'Children’s Health Check‑up',
    desc: 'Comprehensive health screening designed to monitor growth, nutrition, immunity, and developmental milestones.',
    meta: '',
    items: []
  },
  {
    name: 'Senior Citizen Health Check‑up',
    desc: 'Focused preventive screening for age-related health concerns.',
    meta: 'Covers',
    items: ['Cardiac Health', 'Bone Health', 'Kidney Function', 'Diabetes Screening', 'General Wellness']
  },
  {
    name: 'Comprehensive Diabetic Check‑up',
    desc: 'A detailed health assessment designed to identify diabetes-related complications and monitor long-term disease control.',
    meta: '',
    items: []
  },
  {
    name: 'Pre‑Employment Health Check‑up',
    desc: 'Comprehensive screening to evaluate an individual’s fitness for employment and workplace responsibilities.',
    meta: '',
    items: []
  },
  {
    name: 'Diabetic Foot Care Assessment',
    desc: 'Specialised evaluation aimed at early detection of diabetic foot complications and prevention of long-term disability.',
    meta: '',
    items: []
  },
  {
    name: 'Heart Check‑up Package',
    desc: 'Early detection and assessment of cardiovascular risk factors through targeted cardiac screening.',
    meta: '',
    items: []
  },
  {
    name: 'Kidney Check‑up Package',
    desc: 'Preventive kidney screening for early identification of renal disorders and kidney-related complications.',
    meta: '',
    items: []
  }
];
