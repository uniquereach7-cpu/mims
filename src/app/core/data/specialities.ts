import { Speciality } from '../models';
import { FINAL_SPECIALITY_BLURBS, FINAL_SPECIALITY_SUMMARIES } from './speciality-directory-content';

const SPECIALITY_DATA: Speciality[] = [
  {
    slug: 'orthopaedics-joint-replacement', name: 'Orthopaedics & Joint Replacement', group: 'general',
    icon: 'joint', image: 'assets/images/service-inpatient.jpg', blurb: '', summary: ''
  },
  {
    slug: 'radiation-oncology', name: 'Radiation Oncology', group: 'super',
    icon: 'scan', image: 'assets/images/diagnostics.jpg', blurb: '', summary: ''
  },
  {
    slug: 'urology', name: 'Urology', group: 'super',
    icon: 'kidney', image: 'assets/images/diagnostics.jpg', blurb: '', summary: ''
  },
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    group: 'general',
    image: 'assets/images/care-hands.jpg',
    icon: 'stethoscope',
    blurb: 'Comprehensive care for everyday and complex health conditions.',
    summary:
      'The Department of General Medicine provides comprehensive diagnosis and treatment for a wide range of acute and chronic medical conditions including diabetes, hypertension, infections, thyroid disorders, respiratory diseases, and gastrointestinal illnesses. Supported by advanced diagnostics and experienced physicians, the department emphasises preventive care, disease management, and overall wellness.'
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    group: 'general',
    image: 'assets/images/service-emergency.jpg',
    icon: 'scalpel',
    blurb: 'Safe and advanced surgical care for a wide range of procedures.',
    summary:
      'The Department of General Surgery offers advanced surgical care for abdominal disorders, hernias, gallbladder diseases, thyroid conditions, breast disorders, and trauma-related emergencies. Using both conventional and minimally invasive techniques, our surgeons focus on delivering safe procedures, faster recovery, and optimal surgical outcomes.'
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics',
    group: 'general',
    image: 'assets/images/service-inpatient.jpg',
    icon: 'baby',
    blurb: 'Compassionate healthcare for infants, children, and adolescents.',
    summary:
      'The Department of Paediatrics provides compassionate care for infants, children, and adolescents. From immunisations and developmental assessments to the treatment of childhood illnesses and chronic conditions, our paediatric specialists are dedicated to supporting every child’s growth, health, and well-being.'
  },
  {
    slug: 'pulmonary-medicine',
    name: 'Pulmonary Medicine',
    group: 'general',
    image: 'assets/images/blog-preventive-care.jpg',
    icon: 'lungs',
    blurb: 'Expert care for lung diseases and respiratory disorders.',
    summary:
      'The Department of Pulmonary Medicine specialises in the diagnosis and treatment of asthma, COPD, tuberculosis, pneumonia, sleep-related breathing disorders, and other respiratory illnesses. Our specialists help patients achieve better lung health through evidence-based treatment and long-term respiratory care.'
  },
  {
    slug: 'ent',
    name: 'E.N.T.',
    group: 'general',
    image: 'assets/images/service-outpatient.jpg',
    icon: 'ear',
    blurb: 'Specialised treatment for ear, nose, throat, and voice conditions.',
    summary:
      'The Department of E.N.T. offers expert diagnosis and treatment for conditions affecting the ear, nose, throat, head, and neck. Services include management of sinusitis, hearing loss, voice disorders, vertigo, sleep apnoea, and paediatric E.N.T. conditions.'
  },
  {
    slug: 'psychiatry',
    name: 'Psychiatry',
    group: 'general',
    image: 'assets/images/blog-healthy-lifestyle.jpg',
    icon: 'brain',
    blurb: 'Confidential mental health support for every stage of life.',
    summary:
      'The Department of Psychiatry provides confidential and compassionate mental healthcare for individuals experiencing depression, anxiety, bipolar disorder, addiction, PTSD, stress-related conditions, and other mental health challenges. Our approach combines medical expertise with emotional support and counselling.'
  },
  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    group: 'general',
    image: 'assets/images/womens-health.jpg',
    icon: 'pregnancy',
    blurb: 'Complete women’s healthcare from adolescence to motherhood.',
    summary:
      'The Department of Obstetrics & Gynaecology offers comprehensive women’s healthcare services including antenatal care, high-risk pregnancy management, infertility evaluation, menstrual disorder treatment, menopause care, and advanced gynaecological procedures.'
  },
  {
    slug: 'emergency-care',
    name: 'Emergency Care',
    group: 'super',
    image: 'assets/images/service-emergency.jpg',
    icon: 'ambulance',
    blurb: '24×7 emergency and trauma services when every second counts.',
    summary:
      'The Department of Emergency Care operates 24×7 to provide immediate care for trauma, accidents, strokes, heart attacks, poisoning, respiratory emergencies, and other life-threatening conditions. Our emergency specialists ensure rapid diagnosis and intervention when every second matters.'
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    group: 'super',
    image: 'assets/images/blog-health-checkup.jpg',
    icon: 'heart',
    blurb: 'Advanced heart care focused on prevention, diagnosis, and treatment.',
    summary:
      'The Department of Cardiology provides advanced heart care services including diagnosis and management of coronary artery disease, heart failure, arrhythmias, hypertension-related heart disease, and preventive cardiology. Our specialists focus on early detection and effective treatment to promote lifelong heart health.'
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    group: 'super',
    image: 'assets/images/diagnostics.jpg',
    icon: 'brain',
    blurb: 'Expert management of brain, spine, nerve, and muscle disorders.',
    summary:
      'The Department of Neurology specialises in disorders affecting the brain, spinal cord, nerves, and muscles. Our neurologists diagnose and manage stroke, epilepsy, migraines, Parkinson’s disease, dementia, neuropathy, and various neuromuscular disorders.'
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery',
    group: 'super',
    image: 'assets/images/service-emergency.jpg',
    icon: 'spine',
    blurb: 'Specialised surgical care for complex brain and spine conditions.',
    summary:
      'The Department of Neurosurgery provides surgical treatment for conditions involving the brain, spine, and nervous system. Our neurosurgeons manage brain tumours, spinal disorders, traumatic injuries, and neurological emergencies using advanced surgical techniques and comprehensive post-operative care.'
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    group: 'super',
    image: 'assets/images/blog-health-checkup.jpg',
    icon: 'eye',
    blurb: 'Comprehensive eye care for clearer vision and healthier eyes.',
    summary:
      'The Department of Ophthalmology provides comprehensive eye care services for patients of all ages, from routine vision assessments to advanced surgical treatments. Our ophthalmologists diagnose and manage cataracts, glaucoma, retinal disorders, refractive errors, and other eye conditions using advanced diagnostic technology and modern surgical techniques to preserve and restore vision.'
  },
  {
    slug: 'medical-gastroenterology',
    name: 'Medical Gastroenterology',
    group: 'super',
    image: 'assets/images/blog-healthy-lifestyle.jpg',
    icon: 'stomach',
    blurb: 'Non-surgical care for digestive, liver, and pancreatic disorders.',
    summary:
      'The Department of Medical Gastroenterology focuses on non-surgical diagnosis and treatment of digestive disorders affecting the stomach, intestines, liver, pancreas, and gallbladder. Our specialists manage conditions ranging from acid reflux and IBS to liver disease and pancreatitis.'
  },
  {
    slug: 'surgical-gastroenterology',
    name: 'Surgical Gastroenterology',
    group: 'super',
    image: 'assets/images/service-emergency.jpg',
    icon: 'scalpel',
    blurb: 'Specialised surgery for complex digestive and abdominal conditions.',
    summary:
      'The Department of Surgical Gastroenterology provides specialised surgical solutions for digestive tract disorders, liver diseases, pancreatic conditions, colorectal cancers, and complex abdominal conditions. Whenever possible, minimally invasive approaches are used to support faster recovery.'
  },
  {
    slug: 'nephrology',
    name: 'Nephrology',
    group: 'super',
    image: 'assets/images/diagnostics.jpg',
    icon: 'kidney',
    blurb: 'Dedicated kidney care for better renal health and well-being.',
    summary:
      'The Department of Nephrology specialises in kidney health and the management of chronic kidney disease, diabetic nephropathy, acute kidney injury, hypertension-related kidney disorders, and dialysis care. Our specialists focus on preserving kidney function and improving long-term outcomes.'
  },
  {
    slug: 'rheumatology',
    name: 'Rheumatology',
    group: 'super',
    image: 'assets/images/service-outpatient.jpg',
    icon: 'joint',
    blurb: 'Specialised treatment for arthritis, autoimmune, and joint disorders.',
    summary:
      'The Department of Rheumatology provides specialised care for arthritis, autoimmune diseases, connective tissue disorders, lupus, ankylosing spondylitis, gout, and chronic musculoskeletal conditions. Our goal is to improve mobility, reduce pain, and enhance quality of life.'
  },
  {
    slug: 'endocrinology',
    name: 'Endocrinology',
    group: 'super',
    image: 'assets/images/blog-health-checkup.jpg',
    icon: 'hormone',
    blurb: 'Specialised care for diabetes, thyroid, hormonal, and metabolic disorders.',
    summary:
      'The Department of Endocrinology provides specialised care for diabetes, thyroid disorders, hormonal imbalances, obesity, metabolic disorders, and other conditions affecting the endocrine system. Our specialists focus on accurate diagnosis, personalised treatment, and long-term management to support overall health and well-being.'
  },
  {
    slug: 'plastic-reconstructive-surgery',
    name: 'Plastic & Reconstructive Surgery',
    group: 'super',
    image: 'assets/images/service-emergency.jpg',
    icon: 'hands',
    blurb: 'Advanced surgical care to restore function, appearance, and quality of life.',
    summary:
      'The Department of Plastic & Reconstructive Surgery provides specialised surgical care for congenital conditions, injuries, burns, post-cancer reconstruction, and other conditions requiring restoration of form and function. Our specialists combine advanced surgical techniques with personalised care to support functional and aesthetic outcomes.'
  },
  {
    slug: 'head-neck-robotic-oncosurgery',
    name: 'Head & Neck / Robotic Oncosurgery',
    group: 'super',
    image: 'assets/images/diagnostics.jpg',
    icon: 'robot',
    blurb: 'Specialised treatment for head and neck cancers with robotic surgical care.',
    summary:
      'The Department of Head & Neck / Robotic Oncosurgery provides specialised care for cancers and complex conditions affecting the head and neck, including the oral cavity, throat, larynx, and related structures. Our specialists use advanced surgical techniques, including robotic-assisted surgery, alongside comprehensive cancer care.'
  },
  {
    slug: 'interventional-radiology',
    name: 'Interventional Radiology',
    group: 'super',
    image: 'assets/images/diagnostics.jpg',
    icon: 'scan',
    blurb: 'Minimally invasive, image-guided procedures for precise treatment.',
    summary:
      'The Department of Interventional Radiology provides minimally invasive, image-guided procedures for the diagnosis and treatment of a range of medical conditions. Our specialists use advanced imaging techniques to deliver precise treatment with smaller incisions, reduced recovery times, and improved patient comfort.'
  }
];

export const SPECIALITIES: Speciality[] = SPECIALITY_DATA.map((speciality) => ({
  ...speciality,
  summary: FINAL_SPECIALITY_SUMMARIES[speciality.slug] || speciality.summary,
  blurb: FINAL_SPECIALITY_BLURBS[speciality.slug] || speciality.blurb
})).sort((a, b) => a.name.localeCompare(b.name, 'en'));

export const GENERAL_SPECIALITIES = SPECIALITIES.filter((s) => s.group === 'general');
export const SUPER_SPECIALITIES = SPECIALITIES.filter((s) => s.group === 'super');

export function findSpeciality(slug: string): Speciality | undefined {
  return SPECIALITIES.find((s) => s.slug === slug);
}
