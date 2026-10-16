import { Doctor } from '../models';

// Latest approved directory copy and department doctor updates.
export const FINAL_SPECIALITY_SUMMARIES: Record<string, string> = {
  "emergency-care": "The Department of Emergency Care provides immediate medical attention for sudden illnesses, injuries, and life-threatening conditions. From accidents and fractures to breathing difficulties, chest pain, and acute medical emergencies, the team focuses on prompt assessment, stabilisation, and timely treatment to address urgent healthcare needs.",
  "ent": "The Department of ENT provides specialised diagnosis and treatment for conditions affecting the ear, nose, throat, and related structures. Care covers ear infections, hearing and balance disorders, sinusitis, nasal blockages, tonsil problems, voice disorders, and other ENT conditions to help patients maintain healthy hearing, breathing, and communication.",
  "general-medicine": "The Department of General Medicine provides comprehensive diagnosis and treatment for a wide range of acute and chronic medical conditions, including diabetes, hypertension, infections, thyroid disorders, respiratory diseases, and gastrointestinal illnesses. The department emphasises preventive healthcare, accurate diagnosis, ongoing disease management, and overall health.",
  "general-surgery": "The Department of General Surgery offers surgical care for abdominal disorders, hernias, gallbladder diseases, thyroid conditions, breast disorders, and other conditions requiring surgical intervention. Depending on the diagnosis, treatment may involve conventional or minimally invasive techniques, with a focus on appropriate surgical planning, recovery, and follow-up care.",
  "obstetrics-gynaecology": "The Department of Obstetrics & Gynaecology provides comprehensive healthcare for women across different stages of life. Services cover pregnancy care, antenatal and postnatal support, menstrual disorders, hormonal concerns, uterine and ovarian conditions, reproductive health, and gynaecological procedures, with care tailored to individual needs.",
  "orthopaedics-joint-replacement": "The Department of Orthopaedics & Joint Replacement specialises in the diagnosis and treatment of bone, joint, muscle, and ligament conditions. Care includes fractures, sports injuries, arthritis, joint degeneration, spinal conditions, and mobility-related problems. Joint replacement surgery may be recommended for patients with severe joint damage to help relieve pain and improve mobility.",
  "paediatrics": "The Department of Paediatrics provides healthcare for infants, children, and adolescents, covering routine health assessments, growth and developmental monitoring, vaccinations, childhood infections, nutritional concerns, allergies, and other paediatric conditions. The department focuses on supporting healthy development through age-appropriate evaluation, treatment, and preventive care.",
  "psychiatry": "The Department of Psychiatry provides assessment and treatment for mental health conditions that affect emotions, thoughts, behaviour, and daily functioning. Care may include support for anxiety, depression, stress-related concerns, sleep disturbances, mood disorders, and other psychiatric conditions through individualised treatment plans and ongoing clinical support.",
  "pulmonary-medicine": "The Department of Pulmonary Medicine specialises in diagnosing and treating diseases of the lungs and respiratory system. Care covers asthma, chronic obstructive pulmonary disease (COPD), respiratory infections, persistent cough, breathing difficulties, sleep-related breathing disorders, and other lung conditions, helping patients manage symptoms and improve respiratory health.",
  "cardiology": "The Department of Cardiology provides specialised diagnosis and treatment for conditions affecting the heart and blood vessels. Care covers coronary artery disease, hypertension, heart rhythm disorders, heart failure, and other cardiovascular conditions. The department focuses on risk assessment, timely diagnosis, medical management, and long-term heart health.",
  "endocrinology": "The Department of Endocrinology specialises in diagnosing and managing disorders of the endocrine system, which regulates hormones and several essential body functions. Care covers diabetes, thyroid disorders, polycystic ovary syndrome (PCOS), osteoporosis, adrenal disorders, and other hormonal imbalances, with treatment tailored to each patient's needs.",
  "head-neck-robotic-oncosurgery": "The Department of Head & Neck Robotic Oncosurgery focuses on the surgical management of cancers affecting the head and neck region. Depending on the diagnosis, treatment may address cancers of the oral cavity, throat, larynx, and other related structures. Robotic-assisted techniques may be considered for suitable cases, with treatment planning guided by the tumour's location, stage, and individual clinical needs.",
  "interventional-radiology": "The Department of Interventional Radiology uses medical imaging to guide minimally invasive procedures for diagnosing and treating a range of conditions. Depending on the patient's needs, procedures may include image-guided biopsies, drainage of fluid collections, vascular interventions, and embolisation. These techniques can offer alternatives to conventional surgery for selected conditions.",
  "medical-gastroenterology": "The Department of Medical Gastroenterology specialises in diagnosing and treating disorders of the digestive system, including the oesophagus, stomach, intestines, liver, pancreas, and gallbladder. Care covers acid reflux, peptic ulcers, inflammatory bowel disease, liver disorders, pancreatitis, and other gastrointestinal conditions, with a focus on accurate diagnosis and effective medical management.",
  "nephrology": "The Department of Nephrology provides specialised care for diseases affecting the kidneys and their functions. Services cover chronic kidney disease, acute kidney injury, kidney-related hypertension, electrolyte imbalances, and other renal conditions. Treatment focuses on preserving kidney function, managing complications, and supporting patients who may require dialysis or other specialised interventions.",
  "neurology": "The Department of Neurology specialises in diagnosing and managing disorders of the brain, spinal cord, nerves, and muscles. Care covers stroke, epilepsy, migraine, Parkinson's disease, neuropathy, movement disorders, and other neurological conditions. The department focuses on identifying the cause of symptoms and developing appropriate treatment and long-term management plans.",
  "neurosurgery": "The Department of Neurosurgery provides surgical evaluation and treatment for conditions affecting the brain, spine, spinal cord, and peripheral nerves. Care may include brain and spinal tumours, head injuries, nerve compression, spinal disorders, and other conditions requiring surgical intervention. Treatment decisions are guided by the diagnosis, severity of symptoms, and individual clinical requirements.",
  "ophthalmology": "The Department of Ophthalmology provides medical and surgical care for conditions affecting the eyes and vision. Services may cover cataracts, glaucoma, retinal disorders, refractive errors, eye infections, and other ocular conditions. The department focuses on early detection, appropriate treatment, and preserving vision through regular eye examinations and condition-specific care.",
  "plastic-reconstructive-surgery": "The Department of Plastic & Reconstructive Surgery provides surgical care to restore or improve the form and function of tissues affected by injury, disease, congenital conditions, or previous surgery. Treatment may include reconstruction following trauma or tumour removal, management of burns and scars, wound reconstruction, and correction of selected structural abnormalities.",
  "radiation-oncology": "The Department of Radiation Oncology specialises in the use of radiation therapy to treat cancer. Treatment plans are developed according to the type, location, and stage of the cancer, as well as the patient's overall health. Radiation therapy may be used independently or alongside surgery and systemic treatments to control cancer, relieve symptoms, or support other treatment goals.",
  "rheumatology": "The Department of Rheumatology specialises in diagnosing and managing inflammatory, autoimmune, and musculoskeletal conditions. Care covers rheumatoid arthritis, lupus, gout, ankylosing spondylitis, vasculitis, and other rheumatic diseases that can affect joints, muscles, and internal organs. Treatment aims to control inflammation, relieve symptoms, and help maintain mobility and quality of life.",
  "surgical-gastroenterology": "The Department of Surgical Gastroenterology provides surgical treatment for conditions affecting the digestive tract and related organs, including the stomach, intestines, liver, pancreas, gallbladder, and biliary system. Depending on the condition, treatment may involve surgery for gastrointestinal cancers, complex abdominal disorders, and other diseases requiring operative management.",
  "urology": "The Department of Urology specialises in diagnosing and treating conditions affecting the kidneys, urinary tract, bladder, and male reproductive system. Care covers kidney and urinary stones, prostate disorders, urinary tract obstructions, bladder conditions, male infertility, and other urological concerns. Treatment options are based on the diagnosis and may include medication, minimally invasive procedures, or surgery."
};

export const FINAL_SPECIALITY_BLURBS: Record<string, string> = {
  "ent": "Specialised treatment for ear, nose, throat, and voice conditions.",
  "general-medicine": "Diagnosis and treatment of a wide range of adult health conditions.",
  "general-surgery": "Surgical treatment for a wide range of medical conditions.",
  "obstetrics-gynaecology": "Healthcare for women’s reproductive health, pregnancy, and childbirth.",
  "orthopaedics-joint-replacement": "Treatment for bone, joint, and musculoskeletal conditions.",
  "paediatrics": "Comprehensive healthcare for infants, children, and adolescents.",
  "psychiatry": "Confidential mental health support for a range of psychological conditions.",
  "pulmonary-medicine": "Expert care for lung diseases and respiratory disorders.",
  "cardiology": "Diagnosis and treatment of heart conditions and cardiovascular diseases.",
  "endocrinology": "Specialised care for hormonal disorders and endocrine conditions.",
  "head-neck-robotic-oncosurgery": "Advanced surgical treatment for cancers of the head and neck.",
  "interventional-radiology": "Image-guided, minimally invasive procedures for diagnosing and treating diseases.",
  "medical-gastroenterology": "Diagnosis and treatment of digestive system and liver disorders.",
  "nephrology": "Specialised care for kidney diseases and related conditions.",
  "neurology": "Diagnosis and treatment of disorders affecting the brain, nerves, and nervous system.",
  "neurosurgery": "Surgical treatment for conditions affecting the brain, spine, and nervous system.",
  "ophthalmology": "Medical and surgical care for eye conditions and vision disorders.",
  "plastic-reconstructive-surgery": "Surgical procedures to restore function and reconstruct damaged or altered tissues.",
  "radiation-oncology": "Cancer treatment using targeted radiation therapy.",
  "rheumatology": "Diagnosis and treatment of arthritis, autoimmune diseases, and joint disorders.",
  "surgical-gastroenterology": "Surgical treatment for diseases of the digestive tract, liver, pancreas, and related organs.",
  "urology": "Medical and surgical care for urinary tract and male reproductive system conditions."
};

export const FINAL_DOCTOR_UPDATES: Doctor[] = [
  {
    "name": "Dr. Vengala Ramachandra Rao",
    "department": "E.N.T.",
    "slug": "dr-vengala-ramachandra-rao"
  },
  {
    "name": "Dr. Tummidi V V Vinay Kumar",
    "department": "E.N.T.",
    "slug": "dr-tummidi-v-v-vinay-kumar"
  },
  {
    "name": "Dr. Boddepalli Rajesh",
    "department": "E.N.T.",
    "slug": "dr-boddepalli-rajesh"
  },
  {
    "name": "Dr. Vegiraju Divya Mani",
    "department": "E.N.T.",
    "slug": "dr-vegiraju-divya-mani"
  },
  {
    "name": "Dr. Annepu Sowmya",
    "department": "E.N.T.",
    "slug": "dr-annepu-sowmya"
  },
  {
    "name": "Dr. Lothugedda Swathi",
    "department": "E.N.T.",
    "slug": "dr-lothugedda-swathi"
  },
  {
    "name": "Dr. Varre Jhansi Rani",
    "department": "E.N.T.",
    "slug": "dr-varre-jhansi-rani"
  },
  {
    "name": "Dr. Yandrapati Gnana Sundara Raju",
    "department": "General Medicine",
    "slug": "dr-yandrapati-gnana-sundara-raju"
  },
  {
    "name": "Dr. Prahallada Chandra Mishra",
    "department": "General Medicine",
    "slug": "dr-prahallada-chandra-mishra"
  },
  {
    "name": "Dr. Yedla Ramesh Naidu",
    "department": "General Medicine",
    "slug": "dr-yedla-ramesh-naidu"
  },
  {
    "name": "Dr. Mouleeswara Kumar Tamma",
    "department": "General Medicine",
    "slug": "dr-mouleeswara-kumar-tamma"
  },
  {
    "name": "Dr. Sambhaktula Sreenivas",
    "department": "General Medicine",
    "slug": "dr-sambhaktula-sreenivas"
  },
  {
    "name": "Dr. Bobbili Tarun Kesava Naidu",
    "department": "General Medicine",
    "slug": "dr-bobbili-tarun-kesava-naidu"
  },
  {
    "name": "Dr. Kakarlapudi Santosh Raju",
    "department": "General Medicine",
    "slug": "dr-kakarlapudi-santosh-raju"
  },
  {
    "name": "Dr. Allada Kumar",
    "department": "General Medicine",
    "slug": "dr-allada-kumar"
  },
  {
    "name": "Dr. Gumpina Srinivas Susheel",
    "department": "General Medicine",
    "slug": "dr-gumpina-srinivas-susheel"
  },
  {
    "name": "Dr. Indukuri Devi Amrutha",
    "department": "General Medicine",
    "slug": "dr-indukuri-devi-amrutha"
  },
  {
    "name": "Dr. Chintada Bharadwaj",
    "department": "General Medicine",
    "slug": "dr-chintada-bharadwaj"
  },
  {
    "name": "Dr. Maricherla Goutham Kumar Gandhi",
    "department": "General Medicine",
    "slug": "dr-maricherla-goutham-kumar-gandhi"
  },
  {
    "name": "Dr. Kella Manoj Kumar",
    "department": "General Medicine",
    "slug": "dr-kella-manoj-kumar"
  },
  {
    "name": "Dr. Kumpati Prudvi Raju",
    "department": "General Medicine",
    "slug": "dr-kumpati-prudvi-raju"
  },
  {
    "name": "Dr. Pabbireddy Rajendra Babu",
    "department": "General Medicine",
    "slug": "dr-pabbireddy-rajendra-babu"
  },
  {
    "name": "Dr. Routhu Vignan Kumar",
    "department": "General Surgery",
    "slug": "dr-routhu-vignan-kumar",
    "qualifications": "MBBS, MS (General Surgery) N.B. Urology, Manipal",
    "designation": "Consultant – General Surgery",
    "schedule": [
      "Consultation: Via Video Consultation Availability: Daily, 1:00 PM – 2:00 PM"
    ]
  },
  {
    "name": "Dr. E. Naveen",
    "department": "General Surgery",
    "slug": "dr-e-naveen",
    "qualifications": "MBBS, MS (General Surgery)",
    "designation": "Consultant – General Surgery",
    "schedule": [
      "Consultation: Via Video Consultation Availability: On Call"
    ]
  },
  {
    "name": "Dr. Krishna Chaitanya Botsa",
    "department": "General Surgery",
    "slug": "dr-krishna-chaitanya-botsa",
    "qualifications": "MBBS, MS, FALS",
    "designation": "Consultant – General & Laparoscopic Surgery",
    "schedule": [
      "Availability: Monday – Saturday Time: 9:00 AM – 6:00 PM"
    ]
  },
  {
    "name": "Dr. M. S. Mounika",
    "department": "General Surgery",
    "slug": "dr-m-s-mounika",
    "qualifications": "MS, DrNB (Vascular Surgery)",
    "designation": "Consultant Vascular Surgeon"
  },
  {
    "name": "Dr. Chennuru Ramababu",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-chennuru-ramababu"
  },
  {
    "name": "Dr. Chaduvula Suresh Babu",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-chaduvula-suresh-babu"
  },
  {
    "name": "Dr. Naveena Pothala",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-naveena-pothala"
  },
  {
    "name": "Dr. Damera Sri Pavani",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-damera-sri-pavani"
  },
  {
    "name": "Dr. Chaitanya Rajapu",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-chaitanya-rajapu"
  },
  {
    "name": "Dr. Sai Praneetha Reddy Chetla",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-sai-praneetha-reddy-chetla"
  },
  {
    "name": "Dr. Kuracha Anjani Sai",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-kuracha-anjani-sai"
  },
  {
    "name": "Dr. Sheema Anjum",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-sheema-anjum"
  },
  {
    "name": "Dr. G. Spoorthi",
    "department": "Obstetrics & Gynaecology",
    "slug": "dr-g-spoorthi",
    "qualifications": "MBBS, MS (OBG)",
    "designation": "Consultant – Gynaecologist",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. Matha Srikanth",
    "department": "Orthopaedics & Joint Replacement",
    "slug": "dr-matha-srikanth",
    "qualifications": "MS (Orthopaedics), FIJR",
    "designation": "Consultant – Orthopaedics",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. Pradeep P.",
    "department": "Orthopaedics & Joint Replacement",
    "slug": "dr-pradeep-p",
    "qualifications": "MBBS, MS (Orthopaedics)",
    "designation": "Consultant – Orthopaedics",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. Yerramilli Venkata Siva Sankara Murthy",
    "department": "Paediatrics",
    "slug": "dr-yerramilli-venkata-siva-sankara-murthy"
  },
  {
    "name": "Dr. Vegesna Sunita",
    "department": "Paediatrics",
    "slug": "dr-vegesna-sunita"
  },
  {
    "name": "Dr. Chandradeve Varna BSK",
    "department": "Paediatrics",
    "slug": "dr-chandradeve-varna-bsk"
  },
  {
    "name": "Dr. Kanagarla Koteswara Rao",
    "department": "Paediatrics",
    "slug": "dr-kanagarla-koteswara-rao"
  },
  {
    "name": "Dr. Dantuluri Vineela",
    "department": "Paediatrics",
    "slug": "dr-dantuluri-vineela"
  },
  {
    "name": "Dr. Randhi Sowmya",
    "department": "Paediatrics",
    "slug": "dr-randhi-sowmya"
  },
  {
    "name": "Dr. Sai Pratima Pedagopu",
    "department": "Paediatrics",
    "slug": "dr-sai-pratima-pedagopu"
  },
  {
    "name": "Dr. R. Sheshikanth",
    "department": "Paediatrics",
    "slug": "dr-r-sheshikanth"
  },
  {
    "name": "Dr. Mariserla Srikanth",
    "department": "Paediatrics",
    "slug": "dr-mariserla-srikanth"
  },
  {
    "name": "Dr. Alavilli Sumasanthi",
    "department": "Paediatrics",
    "slug": "dr-alavilli-sumasanthi"
  },
  {
    "name": "Dr. Hemanth Madhav Gajarao",
    "department": "Psychiatry",
    "slug": "dr-hemanth-madhav-gajarao"
  },
  {
    "name": "Dr. Archana Vinnakota",
    "department": "Psychiatry",
    "slug": "dr-archana-vinnakota"
  },
  {
    "name": "Dr. Deepthi Saka",
    "department": "Psychiatry",
    "slug": "dr-deepthi-saka"
  },
  {
    "name": "Dr. Akasapu Ayyappa",
    "department": "Pulmonary Medicine",
    "slug": "dr-akasapu-ayyappa"
  },
  {
    "name": "Dr. Teela Venkateswara Rao",
    "department": "Pulmonary Medicine",
    "slug": "dr-teela-venkateswara-rao"
  },
  {
    "name": "Dr. Bhima Bhanu Prakash Avanapu",
    "department": "Pulmonary Medicine",
    "slug": "dr-bhima-bhanu-prakash-avanapu"
  },
  {
    "name": "Dr. Surampalli Koutilya",
    "department": "Pulmonary Medicine",
    "slug": "dr-surampalli-koutilya",
    "qualifications": "MBBS, MD (Pulmonary Medicine)",
    "designation": "Consultant – Pulmonologist",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM",
      "Available Full Time"
    ]
  },
  {
    "name": "Dr. Sudhir Chandra Sinha",
    "department": "Cardiology",
    "slug": "dr-sudhir-chandra-sinha",
    "qualifications": "MD, DM (Cardiology), FACC, FICA, FSCAI",
    "designation": "Senior Consultant – Interventional Cardiologist",
    "schedule": [
      "Consultation: Every Thursday, 10:00 AM – 2:00 PM"
    ]
  },
  {
    "name": "Dr. Kalyan Chakravarthy Pulivarthi",
    "department": "Cardiology",
    "slug": "dr-kalyan-chakravarthy-pulivarthi",
    "qualifications": "MBBS, MD, DM (Cardiology)",
    "designation": "Senior Consultant – Cardiologist",
    "schedule": [
      "Consultation: Every Wednesday, 9:00 AM – 12:00 PM"
    ]
  },
  {
    "name": "Dr. D. Venkata Pavan Kumar",
    "department": "Cardiology",
    "slug": "dr-d-venkata-pavan-kumar",
    "qualifications": "MBBS, DNB (Paediatrics), DNB (Paediatric Cardiology)",
    "designation": "Consultant – Paediatric Cardiologist",
    "schedule": [
      "Consultation: Every Friday, 11:00 AM – 1:00 PM"
    ]
  },
  {
    "name": "Dr. Ramprasad Kadiyala",
    "department": "Cardiology",
    "slug": "dr-ramprasad-kadiyala",
    "qualifications": "MBBS, MD (General Medicine), DM (Cardiology)",
    "designation": "Senior Consultant – Interventional Cardiologist",
    "schedule": [
      "Please call to confirm consultation availability."
    ]
  },
  {
    "name": "Dr. Gumpina Srinivas Susheel",
    "department": "Endocrinology",
    "slug": "dr-gumpina-srinivas-susheel",
    "qualifications": "MBBS, MD (General Medicine), DM (Endocrinology)",
    "designation": "Consultant – Endocrinologist",
    "schedule": [
      "Consultation: Every Tuesday and 1st & 3rd Friday, 9:30 AM – 4:00 PM"
    ]
  },
  {
    "name": "Dr. Hemanth N. Varma D.",
    "department": "Head & Neck / Robotic Oncosurgery",
    "slug": "dr-hemanth-n-varma-d",
    "qualifications": "MDS (Oral & Maxillofacial Surgery) Fellowship in Head & Neck Onco-Surgery, Kidwai Memorial Institute of Oncology",
    "designation": "Consultant – Head & Neck and Robotic Onco Surgery",
    "schedule": [
      "Consultation: Via Video Consultation Availability: Every Thursday Time: 11:00 AM – 12:00 PM"
    ]
  },
  {
    "name": "Dr. Nallana Prasad",
    "department": "Interventional Radiology",
    "slug": "dr-nallana-prasad",
    "qualifications": "MBBS, DNB (Cardio Diagnosis)",
    "designation": "Sr. Consultant - Interventional Radiologist"
  },
  {
    "name": "Dr. B.V.V. Shiva Kiran",
    "department": "Medical Gastroenterology",
    "slug": "dr-b-v-v-shiva-kiran",
    "qualifications": "MBBS, MD, DM (Medical Gastroenterology)",
    "designation": "Consultant – Gastroenterologist",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. Jayasree Lakshmi",
    "department": "Nephrology",
    "slug": "dr-jayasree-lakshmi",
    "qualifications": "MBBS, MD, DM (Nephrology)",
    "designation": "Consultant – Nephrologist",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. K. Kalyan Chakravarthy",
    "department": "Nephrology",
    "slug": "dr-k-kalyan-chakravarthy",
    "qualifications": "MBBS, MD, DM (Nephrology)",
    "designation": "Chief Consultant – Nephrologist",
    "schedule": [
      "Consultation: Every Thursday, 11:00 AM – 1:00 PM"
    ]
  },
  {
    "name": "Dr. Allada Kumar",
    "department": "Nephrology",
    "slug": "dr-allada-kumar",
    "qualifications": "MD, DM (Nephrology)",
    "designation": "Consultant – Nephrologist",
    "schedule": [
      "Consultation: Monday–Sunday, 2:00 PM – 4:00 PM Available Every Day"
    ]
  },
  {
    "name": "Dr. Siripurapu Govind",
    "department": "Neurology",
    "slug": "dr-siripurapu-govind",
    "qualifications": "MBBS, DNB (General Medicine), DM (Neurology, AIIMS Delhi)",
    "designation": "Consultant – Neurologist",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM – 6:00 PM Available Full Time"
    ]
  },
  {
    "name": "Dr. Demudu Babu",
    "department": "Neurology",
    "slug": "dr-demudu-babu",
    "qualifications": "MD, DM (Neurology, NIMS)",
    "designation": "Senior Consultant – Neurologist",
    "schedule": [
      "Consultation: Every Wednesday, 1:00 PM – 3:00 PM"
    ]
  },
  {
    "name": "Dr. K. Mohan V. Sumedha Maturu",
    "department": "Neurology",
    "slug": "dr-k-mohan-v-sumedha-maturu",
    "qualifications": "MD (KMC), DM (SCTIMST), MRCP (SCE Neurology)",
    "designation": "Consultant – Neurologist",
    "schedule": [
      "Consultation: Every Friday, 10:00 AM – 2:00 PM"
    ]
  },
  {
    "name": "Dr. Deepak S. Mandwe",
    "department": "Neurosurgery",
    "slug": "dr-deepak-s-mandwe",
    "qualifications": "MBBS, MS (General Surgery), MCh (Neurosurgery)",
    "designation": "Senior Consultant – Neurosurgeon"
  },
  {
    "name": "Dr. Rajesh Babu Devabhaktuni",
    "department": "Neurosurgery",
    "slug": "dr-rajesh-babu-devabhaktuni",
    "qualifications": "MBBS, MS (General Surgery), MCh (Neurosurgery)",
    "designation": "Consultant – Neurosurgeon",
    "schedule": [
      "Consultation: Every Tuesday, 10:00 AM – 12:00 PM"
    ]
  },
  {
    "name": "Dr. Kotta Srawant",
    "department": "Neurosurgery",
    "slug": "dr-kotta-srawant",
    "qualifications": "MBBS, DNB (Neurosurgery, Manipal), FNES",
    "designation": "Senior Consultant – Neurosurgery (Brain & Spine)",
    "schedule": [
      "Consultation: Every Wednesday, 2:00 PM – 4:00 PM"
    ]
  },
  {
    "name": "Dr. Kurumella Hema Swaroop",
    "department": "Neurosurgery",
    "slug": "dr-kurumella-hema-swaroop",
    "qualifications": "MS, MCh (Neurosurgery)",
    "designation": "Senior Consultant Neurosurgeon",
    "schedule": [
      "Availability: Full Time",
      "Consultation Hours: Monday to Saturday, 9:00 AM–6:00 PM"
    ]
  },
  {
    "name": "Dr. Pilli Veena",
    "department": "Ophthalmology",
    "slug": "dr-pilli-veena"
  },
  {
    "name": "Dr. Vullakala Rajeswara Rao",
    "department": "Ophthalmology",
    "slug": "dr-vullakala-rajeswara-rao"
  },
  {
    "name": "Dr. Kompalli Jwalanagasiva Charan",
    "department": "Ophthalmology",
    "slug": "dr-kompalli-jwalanagasiva-charan"
  },
  {
    "name": "Dr. Pavani Jerry",
    "department": "Ophthalmology",
    "slug": "dr-pavani-jerry"
  },
  {
    "name": "Dr. Bokem Sandhya Rani",
    "department": "Ophthalmology",
    "slug": "dr-bokem-sandhya-rani"
  },
  {
    "name": "Dr. Lahari Gangavalli",
    "department": "Ophthalmology",
    "slug": "dr-lahari-gangavalli"
  },
  {
    "name": "Dr. Bandaru Chandini",
    "department": "Ophthalmology",
    "slug": "dr-bandaru-chandini"
  },
  {
    "name": "Dr. Sushma Maturu",
    "department": "Plastic & Reconstructive Surgery",
    "slug": "dr-sushma-maturu",
    "qualifications": "MS (General Surgery), MCh (Plastic Surgery)",
    "designation": "Senior Consultant – Plastic & Reconstructive Surgeon",
    "schedule": [
      "Consultation: Thursday, 11:00 AM – 1:00 PM"
    ]
  },
  {
    "name": "Dr. Mrutyunjayarao",
    "department": "Radiation Oncology",
    "slug": "dr-mrutyunjayarao",
    "designation": "Consultant – Radiation Oncologist",
    "schedule": [
      "Video Consultation: Every Saturday, 11:00 AM – 12:00 PM"
    ]
  },
  {
    "name": "Dr. V. Akshay",
    "department": "Rheumatology",
    "slug": "dr-v-akshay",
    "qualifications": "MD, DM (Rheumatology)",
    "designation": "Consultant Rheumatologist",
    "schedule": [
      "Consultation: Daily Time: 1:00 PM – 2:00 PM"
    ]
  },
  {
    "name": "Dr. Sravan Kumar Ch.",
    "department": "Surgical Gastroenterology",
    "slug": "dr-sravan-kumar-ch",
    "qualifications": "MS (General Surgery), DNB (Surgical Gastroenterology)",
    "designation": "Consultant – Surgical Gastroenterologist",
    "schedule": [
      "Consultation: Monday–Friday, 10:00 AM – 1:00 PM"
    ]
  },
  {
    "name": "Dr. Palivela Kasi Viswanath",
    "department": "Urology",
    "slug": "dr-palivela-kasi-viswanath",
    "qualifications": "MBBS, MS, MCh (Urology)",
    "designation": "Consultant – Urologist",
    "schedule": [
      "Consultation: Every Friday, 12:00 PM – 3:00 PM"
    ]
  },
  {
    "name": "Dr. Krishna Chaithanya Bevara",
    "department": "Emergency & Critical Care",
    "slug": "dr-krishna-chaithanya-bevara",
    "qualifications": "MBBS, MD (Anaesthesiology)",
    "designation": "Consultant – Critical Care",
    "schedule": [
      "Consultation: Monday–Saturday, 9:00 AM–6:00 PM",
      "Availability: Full Time"
    ]
  }
];
