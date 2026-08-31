import { Doctor } from '../models';

type DoctorDetails = Pick<Doctor, 'qualifications' | 'designation'>;

const slugify = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const doctor = (name: string, department: string, details: Partial<DoctorDetails> = {}): Doctor => ({
  name,
  department,
  slug: slugify(name),
  ...details
});

const consultant = (name: string, department: string, designation = `Consultant - ${department}`): Doctor =>
  doctor(name, department, { designation });

const profile = (name: string, department: string, qualifications: string, designation: string): Doctor =>
  doctor(name, department, { qualifications, designation });

/** Roster reconciled with Doctor Directory v8, Doctors Boards v6, and the latest speciality segregation. */
export const DOCTORS: Doctor[] = [
  // General Medicine
  doctor('Dr. Yandrapati Gnana Sundara Raju', 'General Medicine'),
  doctor('Dr. Prahallada Chandra Mishra', 'General Medicine'),
  consultant('Dr. Yedla Ramesh Naidu', 'General Medicine'),
  consultant('Dr. Sambhaktula Sreenivas', 'General Medicine'),
  consultant('Dr. Bobbili Tarun Kesava Naidu', 'General Medicine'),
  profile('Dr. Mouleeswara Kumar Tamma', 'General Medicine', 'MD (General Medicine)', 'Consultant - General Medicine'),
  doctor('Dr. Kakarlapudi Santosh Raju', 'General Medicine'),
  consultant('Dr. Indukuri Devi Amrutha', 'General Medicine'),
  consultant('Dr. Chintada Bharadwaj', 'General Medicine'),
  consultant('Dr. Maricherla Goutham Kumar Gandhi', 'General Medicine'),
  consultant('Dr. Kella Manoj Kumar', 'General Medicine'),
  consultant('Dr. Kumpati Prudvi Raju', 'General Medicine'),
  consultant('Dr. Pabbireddy Rajendra Babu', 'General Medicine'),

  // Pulmonary Medicine
  doctor('Dr. Akasapu Ayyappa', 'Pulmonary Medicine'),
  consultant('Dr. Teela Venkateswara Rao', 'Pulmonary Medicine', 'Consultant - Respiratory Medicine'),
  profile('Dr. Surampalli Koutilya', 'Pulmonary Medicine', 'MBBS, MD (Pulmonology)', 'Consultant - Pulmonologist'),
  consultant('Dr. Bhima Bhanu Prakash Avanapu', 'Pulmonary Medicine', 'Consultant - Respiratory Medicine'),

  // Dermatology
  consultant('Dr. Kraleti V. T. Gopal', 'Dermatology'),
  consultant('Dr. Penumetsa Venkata Krishnam Raju', 'Dermatology'),
  consultant('Dr. Rekharani Bulla', 'Dermatology'),
  consultant('Dr. Podugu Sirisha', 'Dermatology'),
  doctor('Dr. V. Akhila Vara Maduri', 'Dermatology'),

  // Paediatrics
  consultant('Dr. Yerramilli Venkata Siva Sankara Murthy', 'Paediatrics'),
  consultant('Dr. Vegesna Sunita', 'Paediatrics'),
  consultant('Dr. Chandradeve Varna BSK', 'Paediatrics'),
  consultant('Dr. Kanagarla Koteswara Rao', 'Paediatrics'),
  consultant('Dr. Dantuluri Vineela', 'Paediatrics'),
  consultant('Dr. Randhi Sowmya', 'Paediatrics'),
  consultant('Dr. Sai Pratima Pedagopu', 'Paediatrics'),
  consultant('Dr. R. Sheshikanth', 'Paediatrics'),
  consultant('Dr. Mariserla Srikanth', 'Paediatrics'),
  doctor('Dr. Alavilli Sumasanthi', 'Paediatrics'),

  // Psychiatry
  consultant('Dr. Hemanth Madhav Gajarao', 'Psychiatry'),
  consultant('Dr. Archana Vinnakota', 'Psychiatry'),
  consultant('Dr. Deepthi Saka', 'Psychiatry'),

  // Obstetrics & Gynaecology
  profile('Dr. G. Spoorthi', 'Obstetrics & Gynaecology', 'MBBS, MS (OBG)', 'Consultant - Gynaecology'),
  consultant('Dr. Chennuru Ramababu', 'Obstetrics & Gynaecology'),
  consultant('Dr. Chaduvula Suresh Babu', 'Obstetrics & Gynaecology'),
  consultant('Dr. Naveena Pothala', 'Obstetrics & Gynaecology'),
  consultant('Dr. Damera Sri Pavani', 'Obstetrics & Gynaecology'),
  consultant('Dr. Chaitanya Rajapu', 'Obstetrics & Gynaecology'),
  consultant('Dr. Sai Praneetha Reddy Chetla', 'Obstetrics & Gynaecology'),
  consultant('Dr. Kuracha Anjani Sai', 'Obstetrics & Gynaecology'),
  consultant('Dr. Sheema Anjum', 'Obstetrics & Gynaecology'),

  // General Surgery
  consultant('Dr. Rao Venkata Srinivasa Rao', 'General Surgery'),
  consultant('Dr. Ketavath Changa Thavarya Naik', 'General Surgery'),
  doctor('Dr. Pigilam Mythili', 'General Surgery'),
  consultant('Dr. Krishna Chaitanya Botsa', 'General Surgery'),
  consultant('Dr. Srinivas Marrapu', 'General Surgery'),
  consultant('Dr. Balivada Pawan Kumar', 'General Surgery'),
  consultant('Dr. Kakileti Vinilivia', 'General Surgery'),
  consultant('Dr. Bandaru Satish Kumar', 'General Surgery'),
  consultant('Dr. Srinivasa Reddy Gelli', 'General Surgery'),
  consultant('Dr. Boyapati Gowthami', 'General Surgery'),
  doctor('Dr. Maddala Kavya Sri', 'General Surgery'),
  consultant('Dr. Anantha Bharath', 'General Surgery'),
  consultant('Dr. Durgesh Ommi', 'General Surgery'),

  // Orthopaedics
  doctor('Dr. Sasibhushana Rao Sasapu', 'Orthopaedics'),
  consultant('Dr. Garimella Rajasekhara Rao', 'Orthopaedics'),
  consultant('Dr. Yammala Satish Kumar', 'Orthopaedics'),
  profile('Dr. Matha Srikanth', 'Orthopaedics', 'MS (Ortho), FIJR', 'Consultant - Orthopaedics'),
  consultant('Dr. Moningi Kedar', 'Orthopaedics'),
  profile('Dr. Pradeep Palavalasa', 'Orthopaedics', 'MBBS, MS (Ortho)', 'Consultant - Orthopaedics'),
  consultant('Dr. Thonangi Yeshwanth', 'Orthopaedics'),
  consultant('Dr. Munagavalasa Pavan Kumar', 'Orthopaedics'),
  consultant('Dr. Praveenkumar Muddapu', 'Orthopaedics'),
  consultant('Dr. Chodipalli Trinadh', 'Orthopaedics'),
  consultant('Dr. Rompilli Joshua', 'Orthopaedics'),
  consultant('Dr. Allu Sree Sai Krishna', 'Orthopaedics'),
  consultant('Dr. Vakati Sai Kumar', 'Orthopaedics'),

  // Ophthalmology
  consultant('Dr. Pilli Veena', 'Ophthalmology'),
  consultant('Dr. Vullakala Rajeswara Rao', 'Ophthalmology'),
  consultant('Dr. Kompalli Jwalanagasiva Charan', 'Ophthalmology'),
  consultant('Dr. Pavani Jerry', 'Ophthalmology'),
  consultant('Dr. Bokem Sandhya Rani', 'Ophthalmology'),
  doctor('Dr. Lahari Gangavalli', 'Ophthalmology'),
  consultant('Dr. Bandaru Chandini', 'Ophthalmology'),

  // E.N.T. and Dentistry
  consultant('Dr. Vengala Ramachandra Rao', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Tummidi V. V. Vinay Kumar', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Boddepalli Rajesh', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Vegiraju Divya Mani', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Annepu Sowmya', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Lothugedda Swathi', 'E.N.T.', 'Consultant - ENT'),
  profile('Dr. Varre Jhansi Rani', 'E.N.T.', 'MBBS, MS (ENT)', 'Consultant - ENT Surgeon'),
  consultant('Dr. Namburi Rajesh Kumar Raju', 'E.N.T.', 'Consultant - ENT'),
  consultant('Dr. Endla Varun Kumar', 'E.N.T.', 'Consultant - ENT'),
  doctor('Dr. Rajagiri Bala Sundara Raju', 'Dentistry'),

  // Emergency & Critical Care
  profile('Dr. Krishna Chaithanya Bevara', 'Emergency & Critical Care', 'MBBS, MD (Anaesthesiology)', 'Consultant - Critical Care'),

  // Cardiology
  profile('Dr. U. Uma Devi', 'Cardiology', 'MBBS, MD (General Medicine), Dr.NB (Cardiology)', 'Consultant - Interventional Cardiologist'),
  profile('Dr. Sudhir Chandra Sinha', 'Cardiology', 'MD, DM (Cardiology), FACC, FICA, FSCAI', 'Chief Consultant - Interventional Cardiologist'),
  profile('Dr. Ramprasad Kadiyala', 'Cardiology', 'MBBS, MD (General Medicine), DM (Cardiology)', 'Senior Consultant - Interventional Cardiologist'),
  profile('Dr. Kalyan Chakravarthy Pulivarthi', 'Cardiology', 'MBBS, MD, DM (Cardiology), FACC, FICA, FSCAI', 'Senior Consultant - Interventional Cardiologist'),
  profile('Dr. D. Venkata Pavan Kumar', 'Cardiology', 'MBBS, Dr.NB (Paediatrics), Dr.NB (Paediatric Cardiology)', 'Consultant - Paediatric Cardiologist'),

  // Neurology and Neurosurgery
  profile('Dr. K. Mohan V. Sumedha Maturu', 'Neurology', 'MD (KMC), DM (SCTIMST), MRCP (SCE) Neurology; Epilepsy (IES), Sleep Disorders (WSS)', 'Consultant Neurologist and Sleep Specialist'),
  profile('Dr. Demudu Babu', 'Neurology', 'MD, DM (Neurology - NIMS)', 'Senior Consultant - Neurology'),
  profile('Dr. Siripurapu Govind', 'Neurology', 'MBBS, DNB (General Medicine), DM (Neurology - AIIMS, Delhi)', 'Consultant - Neurology'),
  profile('Dr. Rajesh Babu Devabhaktuni', 'Neurosurgery', 'MBBS, MS (General Surgery), MCh (Neurosurgery)', 'Consultant - Neurosurgery (Brain & Spine)'),
  profile('Dr. Kotta Srawant', 'Neurosurgery', 'MBBS, DNB (Neurosurgery, Manipal), FNES', 'Senior Consultant - Neurosurgery (Brain & Spine)'),
  profile('Dr. Deepak S. Mandwe', 'Neurosurgery', 'MBBS, MS (General Surgery), MCh (Neurosurgery)', 'Senior Consultant - Neurosurgery'),

  // Nephrology
  profile('Dr. Jayasree Lakshmi', 'Nephrology', 'MBBS, MD, DM (Nephrology)', 'Consultant - Nephrology'),
  profile('Dr. K. Kalyan Chakravarthy', 'Nephrology', 'MBBS, MD, DM (Nephrology)', 'Chief Consultant - Nephrologist'),
  profile('Dr. Allada Kumar', 'Nephrology', 'MD, DM (Nephrology)', 'Senior Consultant - Nephrologist'),

  // Gastroenterology and other super-specialities
  profile('Dr. B.V.V. Shiva Kiran', 'Medical Gastroenterology', 'MBBS, MD, DM (Medical Gastroenterology)', 'Consultant - Gastroenterologist'),
  profile('Dr. Sravan Kumar Ch.', 'Surgical Gastroenterology', 'MS (General Surgery), DNB (Surgical Gastroenterology)', 'Consultant - Surgical Gastroenterology'),
  profile('Dr. Gumpina Srinivas Susheel', 'Endocrinology', 'MBBS, MD (General Medicine), DM (Endocrinology)', 'Consultant - Endocrinology'),
  profile('Dr. Sushma Maturu', 'Plastic & Reconstructive Surgery', 'MS (General Surgery), MCh (Plastic Surgery)', 'Senior Consultant - Plastic & Reconstructive Surgery'),
  profile('Dr. Hemanth N. Varma D.', 'Head & Neck / Robotic Oncosurgery', 'MDS (Maxillofacial), FIHNO', 'Consultant - Head & Neck and Robotic Oncosurgeon'),
  profile('Dr. Nallana Prasad', 'Interventional Radiology', 'MBBS, DNB (Cardio Diagnosis)', 'Senior Consultant - Interventional Radiologist')
];

export const DOCTOR_DEPARTMENTS: string[] = Array.from(new Set(DOCTORS.map((item) => item.department))).sort();

export function doctorInitials(name: string): string {
  const parts = name.replace(/^Dr\.\s*/i, '').split(/\s+/).filter(Boolean);
  const selected = parts.length > 1 ? [parts[0], parts.at(-1)!] : parts;
  return selected.map((part) => part[0]).join('').toUpperCase();
}
