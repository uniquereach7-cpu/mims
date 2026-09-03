import { SpecialityDetail } from '../models';

export const SPECIALITY_DETAILS: Record<string, SpecialityDetail> = {
  'ent': {
    slug: 'ent',
    name: 'E.N.T.',
    banner: 'Expert Care for Better Hearing, Easier Breathing & Clearer Communication',
    subline: 'Specialised E.N.T. care for ear, nose and throat conditions, from common infections to complex disorders.',
    overview: { heading: 'Specialised Care for Your Ear, Nose & Throat Health', paras: [
        'The Department of E.N.T. provides comprehensive diagnosis and treatment for conditions affecting the ear, nose, throat, head and neck. As a trusted E.N.T. hospital, our E.N.T. specialists provide personalised care for common and complex conditions, including hearing problems, sinus disorders, tonsillitis, allergies, voice disorders and balance-related conditions.',
        'Whether you need an E.N.T. consultation for persistent ear, nose or throat symptoms or treatment for a long-standing condition, our specialists assess your symptoms carefully to identify the underlying cause. Where required, we work closely with other specialities to provide coordinated care for conditions involving multiple areas of the head and neck.'
      ] },
    services: {
      heading: 'Our Comprehensive Range of E.N.T. Services',
      intro: [
        'Our E.N.T. services cover the evaluation, diagnosis, medical management and surgical treatment of conditions affecting the ears, nose, throat and related structures.'
      ],
      items: [
        { title: 'Ear Care & Hearing Assessment', desc: 'Evaluation and management of ear infections, hearing concerns, ear pain, tinnitus, ear discharge and other conditions affecting ear health.' },
        { title: 'Hearing & Balance Evaluation', desc: 'Assessment of hearing and balance concerns to identify potential ear-related or neurological causes.' },
        { title: 'Nose & Sinus Care', desc: 'Diagnosis and treatment of sinusitis, nasal blockage, allergies, nasal polyps and other conditions affecting the nose and sinuses.' },
        { title: 'Throat & Voice Care', desc: 'Evaluation and management of sore throat, tonsillar conditions, swallowing difficulties, voice changes and other throat-related concerns.' },
        { title: 'Allergy & Nasal Disorder Management', desc: 'Assessment and treatment of nasal allergies, allergic rhinitis and other conditions contributing to persistent nasal symptoms.' },
        { title: 'Paediatric E.N.T. Care', desc: 'Age-appropriate assessment and treatment of common E.N.T. conditions affecting children, including recurrent ear infections, tonsillar problems and nasal or breathing concerns.' },
        { title: 'Sleep-Related E.N.T. Care', desc: 'Evaluation of snoring, nasal obstruction and other upper-airway conditions that may contribute to sleep-related breathing problems.' },
        { title: 'Head & Neck Evaluation', desc: 'Assessment of lumps, swelling, persistent throat symptoms and other head and neck concerns requiring specialist evaluation.' },
        { title: 'Voice & Swallowing Assessment', desc: 'Evaluation of persistent hoarseness, voice changes, swallowing difficulties and related disorders.' },
        { title: 'Multispeciality E.N.T. Care', desc: 'When required, our E.N.T. specialists coordinate care with Neurology, Pulmonary Medicine, Paediatrics, Head & Neck Oncosurgery and other relevant departments.' }
      ]
    },
    symptoms: {
      heading: 'E.N.T. Symptoms That May Need Medical Attention',
      intro: [
        'Many ear, nose and throat symptoms can be caused by minor conditions, but persistent or recurring symptoms should be evaluated by an E.N.T. specialist.'
      ],
      items: [
        { title: 'Persistent ear pain', desc: 'Ongoing or recurrent ear pain may require evaluation to identify the underlying cause.' },
        { title: 'Hearing loss or difficulty hearing', desc: 'New, gradual or sudden changes in hearing should be assessed rather than ignored.' },
        { title: 'Persistent ringing in the ears', desc: 'Recurrent or continuous tinnitus may require an E.N.T. evaluation.' },
        { title: 'Repeated ear infections or ear discharge', desc: 'Frequent infections or persistent discharge may indicate an underlying ear condition.' },
        { title: 'Persistent nasal blockage', desc: 'Ongoing difficulty breathing through the nose may be associated with allergies, sinus disease, nasal polyps or structural problems.' },
        { title: 'Recurring sinus symptoms', desc: 'Frequent facial pressure, nasal congestion, headache or thick nasal discharge may require assessment for chronic sinus problems.' },
        { title: 'Persistent sore throat', desc: 'A sore throat that does not resolve or repeatedly returns should be evaluated.' },
        { title: 'Persistent hoarseness or voice changes', desc: 'Voice changes lasting longer than expected may require examination of the throat and vocal cords.' },
        { title: 'Difficulty swallowing', desc: 'Persistent difficulty or pain while swallowing should be medically assessed.' },
        { title: 'Lump or swelling in the neck', desc: 'An unexplained or persistent neck lump should be evaluated promptly.' },
        { title: 'Snoring or disturbed sleep', desc: 'Persistent loud snoring, pauses in breathing during sleep or excessive daytime sleepiness may warrant assessment for a sleep-related breathing disorder.' }
      ],
      important: 'Sudden hearing loss, severe difficulty breathing, significant bleeding, severe swelling affecting the airway, sudden facial weakness or other rapidly worsening symptoms require urgent medical attention and may require Emergency Care.'
    },
    conditions: {
      heading: 'Expert Care for a Wide Range of E.N.T. Conditions',
      intro: [
        'The Department of E.N.T. provides diagnosis and treatment for a broad range of conditions affecting the ear, nose, throat, head and neck.'
      ],
      groups: [
      { title: 'Ear Conditions', items: [
          'Ear infections',
          'Otitis media',
          'Otitis externa',
          'Earwax-related problems',
          'Tinnitus',
          'Hearing loss',
          'Eardrum disorders',
          'Chronic ear disease'
        ] },
      { title: 'Nose & Sinus Conditions', items: [
          'Sinusitis',
          'Chronic sinusitis',
          'Allergic rhinitis',
          'Nasal polyps',
          'Deviated nasal septum',
          'Nasal obstruction',
          'Recurrent nasal infections'
        ] },
      { title: 'Throat Conditions', items: [
          'Tonsillitis',
          'Adenoid problems',
          'Pharyngitis',
          'Laryngitis',
          'Persistent sore throat',
          'Swallowing disorders'
        ] },
      { title: 'Voice & Speech-Related Conditions', items: [
          'Hoarseness',
          'Vocal cord disorders',
          'Voice changes',
          'Other laryngeal conditions'
        ] },
      { title: 'Hearing & Balance Disorders', items: [
          'Hearing impairment',
          'Tinnitus',
          'Vertigo',
          'Balance disorders',
          'Other vestibular conditions'
        ] },
      { title: 'Sleep-Related Conditions', items: [
          'Snoring',
          'Obstructive sleep apnoea',
          'Upper-airway obstruction',
          'Other sleep-related breathing disorders'
        ] },
      { title: 'Paediatric E.N.T. Conditions', items: [
          'Recurrent ear infections',
          'Enlarged tonsils',
          'Enlarged adenoids',
          'Childhood hearing problems',
          'Nasal obstruction',
          'Other common childhood E.N.T. conditions'
        ] },
      { title: 'Head & Neck Conditions', items: [
          'Neck lumps and swellings',
          'Salivary gland disorders',
          'Thyroid and neck conditions requiring E.N.T. assessment',
          'Benign head and neck conditions',
          'Head and neck cancers requiring specialist evaluation'
        ] }
      ]
    },
    treatments: {
      heading: 'Advanced Treatment for Ear, Nose & Throat Conditions',
      intro: [
        'Treatment is tailored to the patient\'s condition, symptoms, age and overall health. Depending on the diagnosis, management may include medicines, minimally invasive procedures, surgical intervention, rehabilitation or ongoing monitoring.'
      ],
      items: [
        { title: 'Medical E.N.T. Management', desc: 'Individualised medical treatment for infections, allergies, inflammation and other common E.N.T. conditions.' },
        { title: 'Ear Infection Treatment', desc: 'Medical management of acute and chronic ear infections, based on the underlying cause.' },
        { title: 'Sinus & Nasal Treatment', desc: 'Treatment for sinusitis, allergic rhinitis, nasal obstruction, nasal polyps and other nasal conditions.' },
        { title: 'Hearing & Tinnitus Management', desc: 'Evaluation and appropriate management of hearing loss, tinnitus and other hearing-related concerns.' },
        { title: 'Vertigo & Balance Management', desc: 'Assessment and treatment of selected balance and vestibular disorders based on the underlying cause.' },
        { title: 'Voice & Swallowing Management', desc: 'Evaluation and treatment of persistent voice changes, hoarseness and swallowing difficulties.' },
        { title: 'Paediatric E.N.T. Treatment', desc: 'Age-appropriate medical and surgical treatment for common E.N.T. conditions affecting children.' },
        { title: 'E.N.T. Surgical Procedures', desc: 'Where clinically indicated, surgical treatment may be recommended for conditions affecting the ear, nose, throat, sinuses or related structures.' },
        { title: 'Post-operative & Follow-up Care', desc: 'Ongoing monitoring following E.N.T. procedures to support recovery and assess treatment outcomes.' }
      ]
    },
    diagnostics: {
      heading: 'Advanced Diagnostics for Accurate E.N.T. Care',
      intro: [
        'Accurate diagnosis is essential for identifying the underlying cause of E.N.T. symptoms. Depending on the patient\'s condition, our specialists may use clinical examination, hearing and balance assessments, endoscopic evaluation, imaging and other diagnostic investigations.'
      ],
      items: [
        { title: 'Audiometry & Hearing Tests', desc: 'Hearing assessments can help determine the type and degree of hearing loss.' },
        { title: 'Tympanometry', desc: 'This test may be used to assess the function of the middle ear and eardrum.' },
        { title: 'Nasal & Laryngeal Endoscopy', desc: 'Endoscopic examination can provide a detailed view of the nasal passages, throat and larynx when clinically indicated.' },
        { title: 'Balance & Vestibular Assessment', desc: 'Selected tests may be used to investigate vertigo, dizziness and balance-related disorders.' },
        { title: 'Imaging', desc: 'X-ray, CT or MRI may be recommended when detailed assessment of the sinuses, ear, head or neck is required.' },
        { title: 'Laboratory Investigations', desc: 'Blood and other laboratory tests may be recommended where required to investigate infection, inflammation or associated medical conditions.' },
        { title: 'Specialist Diagnostic Support', desc: 'E.N.T. specialists may coordinate investigations with Pulmonary Medicine, Neurology, Paediatrics, Head & Neck Oncosurgery and other relevant departments.' }
      ]
    },
    doctors: {
      heading: 'Meet Our E.N.T. Specialists',
      intro: [
        'Our E.N.T. specialists provide comprehensive evaluation, diagnosis and treatment for conditions affecting the ears, nose, throat, head and neck.'
      ],
      names: [
        'Dr. Vengala Ramachandra Rao',
        'Dr. Tummidi V V Vinay Kumar',
        'Dr. Boddepalli Rajesh',
        'Dr. Vegiraju Divya Mani',
        'Dr. Annepu Sowmya',
        'Dr. Lothugedda Swathi',
        'Dr. Varre Jhansi Rani'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital for E.N.T. Care?',
      intro: [],
      items: [
        { title: 'Comprehensive E.N.T. Care', desc: 'From common ear, nose and throat problems to complex conditions requiring specialist intervention, patients can access comprehensive E.N.T. care.' },
        { title: 'Experienced E.N.T. Specialists', desc: 'Our specialists bring expertise in diagnosing and managing a broad range of ear, nose, throat and head and neck conditions.' },
        { title: 'Accurate Diagnostic Evaluation', desc: 'A detailed clinical assessment supported by appropriate diagnostic investigations helps identify the underlying cause of E.N.T. symptoms.' },
        { title: 'Personalised Treatment Plans', desc: 'Treatment is tailored to the patient\'s condition, symptoms, age, medical history and individual needs.' },
        { title: 'Advanced Surgical Expertise', desc: 'Where surgery is required, patients can access specialist surgical care appropriate to their diagnosis and clinical needs.' },
        { title: 'Multidisciplinary Care', desc: 'E.N.T. specialists can coordinate with Pulmonary Medicine, Neurology, Paediatrics, Head & Neck Oncosurgery and other departments when multidisciplinary care is required.' },
        { title: 'Continuity of Care', desc: 'From initial consultation and diagnosis to treatment and follow-up, our team supports patients throughout their E.N.T. healthcare journey.' }
      ]
    },
    faqs: [
      { q: 'What does an E.N.T. specialist treat?', a: 'An E.N.T. specialist diagnoses and treats conditions affecting the ears, nose, throat, head and neck. These include hearing loss, ear infections, sinusitis, nasal allergies, tonsillitis, voice disorders, vertigo and other E.N.T. conditions.' },
      { q: 'When should I see an E.N.T. specialist?', a: 'You should consider an E.N.T. consultation for persistent ear, nose or throat symptoms such as ongoing ear pain, hearing loss, tinnitus, nasal blockage, recurring sinus problems, persistent sore throat, hoarseness or difficulty swallowing.' },
      { q: 'Can an E.N.T. specialist treat hearing loss?', a: 'Yes. E.N.T. specialists can evaluate hearing loss, identify possible underlying causes and recommend appropriate treatment or further hearing assessment. The management approach depends on the type and cause of the hearing loss.' },
      { q: 'When should I see an E.N.T. doctor for sinus problems?', a: 'If sinus symptoms are persistent, recurrent or significantly affecting your daily life, an E.N.T. doctor for sinus problems can evaluate the underlying cause. This may include sinusitis, allergies, nasal polyps or structural problems affecting the nasal passages.' },
      { q: 'Can children also see an E.N.T. specialist?', a: 'Yes. Children can develop a range of E.N.T. conditions, including recurrent ear infections, enlarged tonsils or adenoids, hearing problems and nasal obstruction. A Paediatric E.N.T. evaluation can help determine the appropriate treatment.' },
      { q: 'When does an E.N.T. condition require surgery?', a: 'Surgery may be considered when a condition does not respond adequately to medical treatment, causes significant symptoms or requires correction of a structural problem. The decision depends on the individual diagnosis and clinical assessment.' }
    ]
  },
  'general-medicine': {
    slug: 'general-medicine',
    name: 'General Medicine',
    banner: 'Expert Care for Your Everyday Health & Well-being',
    subline: 'Expert General Medicine care for adults, from common illnesses to chronic conditions',
    overview: { heading: 'Specialised Care for a Wide Range of Medical Conditions', paras: [
        'The Department of General Medicine provides comprehensive care for a wide range of health conditions, from common illnesses and infections to chronic diseases requiring long-term management. As a trusted General Medicine hospital, our General Medicine specialists provide personalised care for conditions such as fever, diabetes, hypertension, thyroid disorders and respiratory illnesses. Whether you need a General Medicine consultation for a new health concern or General Medicine treatment for chronic diseases, our physicians take a holistic approach to diagnosis and treatment.',
        'For complex or overlapping health concerns, our team works closely with specialists across the hospital to coordinate investigations, treatment and follow-up care.'
      ] },
    services: {
      heading: 'Our Comprehensive Range of General Medicine Services',
      intro: [
        'Our General Medicine services cover preventive care, diagnosis, treatment and long-term management across a wide range of medical needs.'
      ],
      items: [
        { title: 'Preventive Health & Medical Check‑ups', desc: 'Health assessments and screening to identify risk factors and potential health problems at an early stage.' },
        { title: 'Chronic Disease Management', desc: 'Long-term monitoring and treatment for conditions such as diabetes, hypertension, thyroid disorders and other lifestyle-related diseases.' },
        { title: 'Infectious Disease Management', desc: 'Diagnosis and medical treatment of common and complex infections, including respiratory, gastrointestinal and other systemic infections.' },
        { title: 'Fever Evaluation & Management', desc: 'Systematic evaluation of persistent, recurrent or unexplained fever to identify the underlying cause and provide appropriate treatment.' },
        { title: 'Diabetes & Metabolic Care', desc: 'Medical management of diabetes, obesity, metabolic disorders and associated risk factors, with ongoing monitoring and lifestyle guidance.' },
        { title: 'Hypertension Management', desc: 'Diagnosis, treatment and monitoring of high blood pressure, including assessment of associated cardiovascular and organ-related risks.' },
        { title: 'Respiratory & Medical Care', desc: 'Evaluation and management of conditions such as respiratory infections, asthma and other medical respiratory problems, with referral to Pulmonary Medicine when specialised care is required.' },
        { title: 'Geriatric Medical Care', desc: 'Comprehensive assessment of older adults, particularly those living with multiple medical conditions or taking multiple medications.' },
        { title: 'Multispeciality Care Coordination', desc: 'When a patient\'s condition requires specialist intervention, our General Medicine physicians coordinate care with relevant departments across the hospital.' }
      ]
    },
    symptoms: {
      heading: 'Symptoms That May Need Prompt Medical Evaluation',
      intro: [
        'Some symptoms may appear minor but can sometimes indicate an underlying medical condition. Seek medical evaluation if you experience:'
      ],
      items: [
        { title: 'Persistent or unexplained fever', desc: 'Especially when it continues, keeps returning or is accompanied by other symptoms.' },
        { title: 'Unexplained weight loss', desc: 'Unintentional weight loss may require evaluation for metabolic, infectious or other underlying conditions.' },
        { title: 'Persistent fatigue or weakness', desc: 'Ongoing tiredness can be associated with anaemia, thyroid disorders, infections, nutritional deficiencies and other conditions.' },
        { title: 'Breathlessness or difficulty breathing', desc: 'New or worsening breathlessness should not be ignored, particularly when associated with chest discomfort.' },
        { title: 'Persistent headaches or dizziness', desc: 'Frequent or severe symptoms may require medical assessment to identify the underlying cause.' },
        { title: 'Repeated infections', desc: 'Frequent or unusually persistent infections may warrant further evaluation.' },
        { title: 'Persistent abdominal or digestive symptoms', desc: 'Ongoing abdominal pain, vomiting, diarrhoea or changes in bowel habits should be assessed.' },
        { title: 'Unusually high or persistently elevated blood pressure or blood sugar', desc: 'Regular monitoring and timely medical management can help reduce the risk of complications.' }
      ],
      important: 'Sudden chest pain, severe breathlessness, loss of consciousness, sudden weakness or difficulty speaking, severe confusion or other rapidly worsening symptoms require urgent medical attention and may require Emergency Care.'
    },
    conditions: {
      heading: 'Expert Care for a Wide Range of Health Conditions',
      intro: [
        'The Department of General Medicine provides medical care for a broad range of adult health conditions, including:'
      ],
      groups: [
      { title: 'Metabolic & Endocrine Conditions', items: [
          'Diabetes mellitus',
          'Thyroid disorders',
          'Obesity',
          'Metabolic syndrome',
          'Electrolyte imbalances'
        ] },
      { title: 'Cardiovascular Conditions', items: [
          'Hypertension',
          'High cholesterol',
          'Cardiovascular risk factors',
          'Medical management of associated cardiovascular conditions'
        ] },
      { title: 'Respiratory Conditions', items: [
          'Asthma',
          'Respiratory tract infections',
          'Bronchitis',
          'Pneumonia',
          'Chronic respiratory conditions'
        ] },
      { title: 'Infectious Diseases', items: [
          'Viral infections',
          'Bacterial infections',
          'Dengue and other febrile illnesses',
          'Typhoid',
          'Tuberculosis',
          'Other systemic infections, as clinically appropriate'
        ] },
      { title: 'Gastrointestinal & Liver Conditions', items: [
          'Gastritis',
          'Acid reflux',
          'Indigestion',
          'Gastrointestinal infections',
          'Fatty liver disease',
          'Hepatitis and other medical liver conditions'
        ] },
      { title: 'Kidney & Urinary Conditions', items: [
          'Urinary tract infections',
          'Early kidney-related medical problems',
          'Electrolyte disturbances',
          'Medical conditions requiring nephrology referral'
        ] },
      { title: 'Musculoskeletal Conditions', items: [
          'Generalised body pain',
          'Joint pain',
          'Arthritis-related medical conditions',
          'Musculoskeletal complaints'
        ] },
      { title: 'Haematological Conditions', items: [
          'Anaemia',
          'Nutritional deficiencies',
          'Certain blood-related disorders requiring medical evaluation'
        ] },
      { title: 'Other Medical Conditions', items: [
          'Allergic and inflammatory conditions',
          'Autoimmune and multisystem disorders',
          'Chronic disease complications',
          'Unexplained or undifferentiated medical symptoms'
        ] }
      ]
    },
    treatments: {
      heading: 'Comprehensive Medical Treatment & Management',
      intro: [
        'General Medicine primarily focuses on non-surgical medical treatment, supported by accurate diagnosis, medication management, monitoring and lifestyle interventions.'
      ],
      items: [
        { title: 'Medical Management', desc: 'Individualised treatment plans using appropriate medicines and evidence-based medical therapies.' },
        { title: 'Infection Management', desc: 'Diagnosis and appropriate medical treatment of bacterial, viral and other infections.' },
        { title: 'Fluid & Electrolyte Management', desc: 'Assessment and correction of fluid and electrolyte imbalances where clinically indicated.' },
        { title: 'Medication Review & Optimisation', desc: 'Review of existing medicines, particularly for patients with multiple conditions or taking several medications.' },
        { title: 'Lifestyle & Preventive Management', desc: 'Guidance on nutrition, physical activity, weight management, sleep, smoking cessation and other factors that influence long-term health.' },
        { title: 'Pre-operative Medical Assessment', desc: 'Medical evaluation and optimisation of patients before selected surgical procedures, in coordination with the relevant surgical speciality.' },
        { title: 'Post-hospitalisation & Follow-up Care', desc: 'Continued medical monitoring following hospitalisation or treatment for an acute illness.' }
      ]
    },
    diagnostics: {
      heading: 'Advanced Diagnostics Supporting Accurate Care',
      intro: [
        'Accurate diagnosis is central to General Medicine. Depending on the patient\'s symptoms and clinical assessment, the department may use laboratory investigations, imaging and other diagnostic services available across the hospital.'
      ],
      items: [
        { title: 'Comprehensive blood investigations', desc: 'Blood tests help assess infection, anaemia, blood sugar, kidney and liver function, electrolytes and other health parameters.' },
        { title: 'Urine and other laboratory investigations', desc: 'Useful in evaluating infections, kidney and metabolic conditions and other medical problems.' },
        { title: 'ECG and cardiac assessment', desc: 'May be used to evaluate symptoms such as chest discomfort, palpitations, dizziness or breathlessness.' },
        { title: 'Diagnostic imaging', desc: 'X-ray, ultrasound, CT and MRI may be used when clinically indicated to investigate symptoms and suspected conditions.' },
        { title: 'Specialist diagnostic support', desc: 'General Medicine physicians can coordinate investigations with Cardiology, Pulmonary Medicine, Gastroenterology, Neurology, Nephrology and other relevant departments.' }
      ]
    },
    doctors: {
      heading: 'Meet Our General Medicine Specialists',
      intro: [
        'Our General Medicine team comprises experienced physicians who provide comprehensive medical evaluation and personalised treatment for adults.'
      ],
      names: [
        'Dr. Yandrapati Gnana Sundara Raju',
        'Dr. Prahallada Chandra Mishra',
        'Dr. Yedla Ramesh Naidu',
        'Dr. Mouleeswara Kumar Tamma',
        'Dr. Sambhaktula Sreenivas',
        'Dr. Bobbili Tarun Kesava Naidu',
        'Dr. Kakarlapudi Santosh Raju',
        'Dr. Allada Kumar',
        'Dr. Gumpina Srinivas Susheel',
        'Dr. Indukuri Devi Amrutha',
        'Dr. Chintada Bharadwaj',
        'Dr. Maricherla Goutham Kumar Gandhi',
        'Dr. Kella Manoj Kumar',
        'Dr. Kumpati Prudvi Raju',
        'Dr. Pabbireddy Rajendra Babu'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital?',
      intro: [],
      items: [
        { title: 'Comprehensive Adult Healthcare', desc: 'From common illnesses to complex medical conditions, patients can access comprehensive adult medical care under one roof.' },
        { title: 'Experienced Medical Specialists', desc: 'Our physicians bring clinical expertise to the diagnosis and management of a broad range of adult health conditions.' },
        { title: 'Patient-Centred Care', desc: 'Every patient\'s symptoms, medical history, lifestyle and individual health needs are considered when developing a treatment plan.' },
        { title: 'Multidisciplinary Approach', desc: 'When a condition requires specialist intervention, our General Medicine team can coordinate care with other departments across the hospital.' },
        { title: 'Advanced Diagnostic Support', desc: 'Access to hospital-wide laboratory, imaging and diagnostic services supports timely and accurate evaluation.' },
        { title: 'Continuity of Care', desc: 'From initial consultation and diagnosis to treatment and follow-up, our team supports patients throughout their healthcare journey.' },
        { title: 'Preventive & Long-Term Health Management', desc: 'Beyond treating illness, General Medicine focuses on identifying health risks early and supporting patients in managing chronic conditions and maintaining long-term health.' }
      ]
    },
    faqs: [
      { q: 'What does General Medicine treat?', a: 'General Medicine provides comprehensive medical care for adults, including the diagnosis and treatment of infections, fever, diabetes, hypertension, thyroid disorders, respiratory illnesses, gastrointestinal conditions and many other medical conditions.' },
      { q: 'When should I see a General Medicine doctor?', a: 'You can consult a General Medicine specialist for persistent or unexplained symptoms, recurrent infections, fever, fatigue, dizziness, digestive problems, breathing difficulties or concerns about conditions such as diabetes and high blood pressure. A General Medicine doctor can also help with routine health assessments and preventive care.' },
      { q: 'What is the difference between General Medicine and General Surgery?', a: 'General Medicine focuses primarily on the non-surgical diagnosis and treatment of medical conditions, while General Surgery deals with conditions that may require surgical intervention. A General Medicine physician can also assess your condition and refer you to a surgical specialist when required.' },
      { q: 'Can a General Medicine doctor manage chronic conditions?', a: 'Yes. General Medicine specialists can provide long-term management of several chronic conditions, including diabetes, hypertension, thyroid disorders and other multisystem medical conditions. Treatment may involve medication, lifestyle changes, regular monitoring and coordination with other specialists when needed.' },
      { q: 'Do I need to see a specialist directly, or should I consult General Medicine first?', a: 'It depends on your symptoms and known medical condition. If you are experiencing unexplained or multiple symptoms, a General Medicine physician can perform an overall assessment and determine whether specialist evaluation or additional investigations are required.' },
      { q: 'Can I visit General Medicine for a routine health check-up?', a: 'Yes. General Medicine can be an appropriate first point of contact for adult preventive healthcare and routine medical assessments. Your physician can review your medical history and risk factors and recommend appropriate investigations or specialist consultations where necessary.' }
    ]
  },
  'general-surgery': {
    slug: 'general-surgery',
    name: 'General Surgery',
    banner: 'Precision in Surgery. Focused on Your Recovery.',
    subline: 'Expert General Surgery care for a wide range of conditions, from common surgical problems to complex procedures',
    overview: { heading: 'Comprehensive Surgical Care for a Wide Range of Conditions', paras: [
        'The Department of General Surgery provides comprehensive surgical evaluation and treatment for a wide range of conditions affecting the abdomen, digestive system, breast, skin and soft tissues. As a trusted General Surgery hospital, our General Surgery specialists provide personalised care for conditions such as hernias, gallbladder disease, appendicitis, piles, fissures and other conditions that may require surgical intervention.',
        'Whether you need a General Surgery consultation for a newly diagnosed condition or General Surgery treatment for a condition requiring a procedure, our surgeons assess each patient carefully and recommend the most appropriate treatment based on their condition, medical history and individual needs.',
        'Where appropriate, our team uses minimally invasive surgical techniques to support smaller incisions, reduced postoperative discomfort and faster recovery. For complex conditions requiring specialised expertise, our General Surgery team works closely with other surgical and medical departments across the hospital to coordinate comprehensive care.',
        'Consult a General Surgery Specialist'
      ] },
    services: {
      heading: 'Our Comprehensive Range of General Surgery Services',
      intro: [
        'Our General Surgery services cover surgical evaluation, procedures and postoperative care for a wide range of common and complex surgical conditions.'
      ],
      items: [
        { title: 'Hernia Surgery', desc: 'Evaluation and surgical treatment of inguinal, umbilical, incisional and other types of hernias.' },
        { title: 'Gallbladder Surgery', desc: 'Surgical treatment of gallstones, gallbladder inflammation and other conditions affecting the gallbladder, including laparoscopic procedures where appropriate.' },
        { title: 'Appendix Surgery', desc: 'Surgical treatment of appendicitis and related conditions, including minimally invasive approaches when clinically suitable.' },
        { title: 'Colorectal & Anorectal Surgery', desc: 'Evaluation and surgical management of conditions such as piles, anal fissures, fistulas and other anorectal conditions.' },
        { title: 'Breast Surgery', desc: 'Evaluation and surgical treatment of selected benign and suspicious breast conditions, with referral to specialised breast or oncology services when required.' },
        { title: 'Thyroid & Neck Surgery', desc: 'Surgical evaluation and treatment of selected thyroid and neck conditions requiring operative management.' },
        { title: 'Soft Tissue & Skin Surgery', desc: 'Surgical treatment of selected cysts, lipomas, abscesses and other conditions involving the skin and soft tissues.' },
        { title: 'Laparoscopic Surgery', desc: 'Minimally invasive surgical procedures performed through small incisions where clinically appropriate, with the potential for reduced postoperative discomfort and shorter recovery.' },
        { title: 'Emergency General Surgery', desc: 'Prompt surgical evaluation and management of acute conditions such as appendicitis, intestinal obstruction, perforation and other surgical emergencies.' },
        { title: 'Day‑Care & Minor Surgical Procedures', desc: 'Selected procedures that may be performed without prolonged hospitalisation, depending on the patient\'s condition and clinical requirements.' },
        { title: 'Postoperative Care & Follow‑up', desc: 'Monitoring recovery after surgery, managing postoperative concerns and providing follow-up care to support safe recovery.' }
      ]
    },
    symptoms: {
      heading: 'Symptoms That May Need Surgical Evaluation',
      intro: [
        'Some symptoms may indicate a condition requiring surgical assessment. Seek medical evaluation if you experience:'
      ],
      items: [
        { title: 'Persistent or severe abdominal pain', desc: 'Ongoing, worsening or unexplained abdominal pain may require evaluation to identify the underlying cause.' },
        { title: 'A new lump or swelling', desc: 'A lump in the abdomen, groin, breast, neck or other area should be assessed, particularly if it is painful, enlarging or persistent.' },
        { title: 'Painful or enlarging hernia', desc: 'A swelling that becomes painful, firm or difficult to push back may require prompt medical assessment.' },
        { title: 'Persistent vomiting or abdominal distension', desc: 'These symptoms, particularly when associated with severe abdominal pain or inability to pass stool or gas, may require urgent evaluation.' },
        { title: 'Blood in the stool or rectal bleeding', desc: 'Persistent or unexplained bleeding should be medically evaluated to determine the underlying cause.' },
        { title: 'Persistent anal pain or bleeding', desc: 'Pain, bleeding, swelling or discomfort around the anus may be associated with conditions such as piles, fissures or fistulas.' },
        { title: 'Changes in bowel habits', desc: 'Persistent constipation, diarrhoea or a significant change in bowel habits may require medical assessment.' },
        { title: 'Difficulty swallowing or a neck swelling', desc: 'Persistent swallowing difficulties or a new neck lump may require evaluation, including assessment of the thyroid or other structures.' }
      ],
      important: 'Severe or rapidly worsening abdominal pain, persistent vomiting, abdominal swelling with inability to pass stool or gas, heavy bleeding, sudden severe pain in a hernia or other rapidly worsening symptoms require urgent medical attention and may require Emergency Care.'
    },
    conditions: {
      heading: 'Expert Surgical Care for a Wide Range of Conditions',
      intro: [
        'The Department of General Surgery provides surgical evaluation and treatment for a broad range of conditions, including:',
        'Hernias',
        'Inguinal hernia',
        'Umbilical hernia',
        'Incisional hernia',
        'Ventral hernia',
        'Other abdominal wall hernias'
      ],
      groups: [
      { title: 'Gallbladder Conditions', items: [
          'Gallstones',
          'Acute cholecystitis',
          'Chronic gallbladder disease',
          'Other surgically treatable gallbladder conditions'
        ] },
      { title: 'Appendix & Acute Abdominal Conditions', items: [
          'Acute appendicitis',
          'Complicated appendicitis',
          'Selected acute abdominal conditions requiring surgical evaluation',
          'Intestinal obstruction',
          'Abdominal perforation'
        ] },
      { title: 'Anorectal Conditions', items: [
          'Haemorrhoids / piles',
          'Anal fissure',
          'Anal fistula',
          'Perianal abscess',
          'Other benign anorectal conditions'
        ] },
      { title: 'Breast Conditions', items: [
          'Benign breast lumps',
          'Breast abscess',
          'Selected breast lesions requiring surgical evaluation',
          'Other surgically treatable breast conditions'
        ] },
      { title: 'Thyroid & Neck Conditions', items: [
          'Thyroid nodules requiring surgical assessment',
          'Selected thyroid disorders requiring surgery',
          'Benign neck lumps',
          'Other surgically treatable neck conditions'
        ] },
      { title: 'Skin & Soft Tissue Conditions', items: [
          'Lipomas',
          'Sebaceous / epidermoid cysts',
          'Abscesses',
          'Soft tissue lumps',
          'Selected benign skin and soft tissue lesions'
        ] },
      { title: 'Other Surgical Conditions', items: [
          'Abdominal wall conditions',
          'Selected gastrointestinal surgical conditions',
          'Surgical infections',
          'Wounds requiring surgical management',
          'Conditions requiring minor surgical procedures'
        ] }
      ]
    },
    treatments: {
      heading: 'Comprehensive Surgical Treatment & Management',
      intro: [
        'General Surgery provides both conventional and minimally invasive surgical treatment, depending on the condition, patient factors and clinical requirements.'
      ],
      items: [
        { title: 'Laparoscopic Surgery', desc: 'Minimally invasive procedures performed through small incisions where appropriate, including selected hernia, gallbladder and appendicitis procedures.' },
        { title: 'Open Surgery', desc: 'Conventional surgical procedures performed when clinically appropriate or when the condition requires a larger surgical approach.' },
        { title: 'Hernia Repair', desc: 'Surgical repair of abdominal wall hernias using appropriate techniques based on the type, size and location of the hernia.' },
        { title: 'Gallbladder Surgery', desc: 'Surgical removal of the gallbladder for conditions such as symptomatic gallstones and gallbladder inflammation, when indicated.' },
        { title: 'Appendectomy', desc: 'Surgical removal of the appendix for appendicitis and related complications.' },
        { title: 'Anorectal Procedures', desc: 'Surgical treatment of selected conditions such as haemorrhoids, anal fissures, fistulas and abscesses.' },
        { title: 'Minor Surgical Procedures', desc: 'Selected procedures for conditions involving the skin, soft tissues and other areas that may not require major surgery.' },
        { title: 'Emergency Surgical Management', desc: 'Prompt assessment and surgical treatment of acute conditions requiring urgent intervention.' },
        { title: 'Postoperative Care & Follow‑up', desc: 'Monitoring recovery, managing postoperative symptoms and providing appropriate follow-up after surgery.' }
      ]
    },
    diagnostics: {
      heading: 'Advanced Diagnostics Supporting Accurate Surgical Care',
      intro: [
        'Accurate diagnosis is essential in determining whether surgery is required and selecting the most appropriate treatment. Depending on the patient\'s symptoms and clinical assessment, the department may use:'
      ],
      items: [
        { title: 'Blood investigations', desc: 'Laboratory tests may help assess infection, inflammation, anaemia, organ function and overall fitness for surgery.' },
        { title: 'Ultrasound', desc: 'May be used to evaluate conditions involving the abdomen, gallbladder, breast, thyroid, soft tissues and other areas.' },
        { title: 'X-ray', desc: 'May be used to investigate certain abdominal, chest or other surgical conditions.' },
        { title: 'CT scans', desc: 'Detailed imaging that may help evaluate appendicitis, abdominal emergencies, intestinal obstruction, hernias and other complex conditions.' },
        { title: 'MRI', desc: 'May be recommended for selected soft tissue, breast, abdominal or other conditions when more detailed imaging is required.' },
        { title: 'Endoscopic investigations', desc: 'Selected patients may require endoscopic evaluation, coordinated with Gastroenterology or other relevant departments.' },
        { title: 'Pre-operative assessment', desc: 'Patients undergoing surgery may require investigations to assess their overall health and readiness for anaesthesia and surgery.' }
      ]
    },
    doctors: {
      heading: 'Meet Our General Surgery Specialists',
      intro: [
        'Our General Surgery team comprises experienced surgeons who provide comprehensive evaluation, surgical treatment and postoperative care for a wide range of conditions.'
      ],
      names: [
        'Dr. Rao Venkata Srinivasa Rao',
        'Dr. Ketavath Changa Thavarya Naik',
        'Dr. Pigilam Mythili',
        'Dr. Krishna Chaitanya Botsa',
        'Dr. Srinivas Marrapu',
        'Dr. Balivada Pawan Kumar',
        'Dr. Kakileti Vinilivia',
        'Dr. Bandaru Satish Kumar',
        'Dr. Srinivasa Reddy Gelli',
        'Dr. Boyapati Gowthami',
        'Dr. Maddala Kavya Sri',
        'Dr. Anantha Bharath',
        'Dr. Durgesh Ommi'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital?',
      intro: [],
      items: [
        { title: 'Comprehensive Surgical Care', desc: 'From evaluation and diagnosis to surgery and postoperative follow-up, patients can access coordinated surgical care under one roof.' },
        { title: 'Experienced Surgical Specialists', desc: 'Our surgeons bring clinical expertise in the evaluation and surgical management of a broad range of conditions.' },
        { title: 'Minimally Invasive Surgical Options', desc: 'Where clinically appropriate, laparoscopic techniques may help minimise surgical trauma and support recovery.' },
        { title: 'Patient-Centred Treatment', desc: 'Each patient\'s condition, medical history, overall health and individual needs are considered when planning treatment.' },
        { title: 'Advanced Diagnostic Support', desc: 'Access to hospital-wide laboratory, imaging and diagnostic services supports accurate diagnosis and treatment planning.' },
        { title: 'Multidisciplinary Approach', desc: 'When a condition requires specialised expertise, our General Surgery team works with relevant medical and surgical departments across the hospital.' },
        { title: 'Comprehensive Perioperative Care', desc: 'Patients receive medical assessment, surgical care and postoperative monitoring as part of an integrated treatment pathway.' },
        { title: 'Emergency Surgical Support', desc: 'The team can evaluate and manage selected acute surgical conditions requiring urgent intervention.' }
      ]
    },
    faqs: [
      { q: 'What does General Surgery treat?', a: 'General Surgery provides surgical evaluation and treatment for a wide range of conditions, including hernias, gallbladder disease, appendicitis, piles, anal fissures, fistulas, selected breast and thyroid conditions, skin and soft tissue problems and other conditions that may require surgical intervention.' },
      { q: 'When should I see a General Surgery doctor?', a: 'You can consult a General Surgery specialist if you have a persistent or severe abdominal pain, a new or painful lump, a hernia, recurrent gallbladder symptoms, appendicitis-like symptoms, persistent anal pain or bleeding, or another condition that may require surgical evaluation.' },
      { q: 'How do I know if I need General Surgeon or another specialist?', a: 'If you are unsure which specialist to consult, a General Surgery evaluation can help determine whether your symptoms may require surgical treatment. Where appropriate, the surgeon can coordinate your care with another specialist or department.' },
      { q: 'How long does it take to recover after General Surgery?', a: 'Recovery varies depending on the type of procedure, surgical technique, the patient\'s overall health and whether the surgery was planned or performed as an emergency. Your surgeon will provide specific postoperative instructions and guidance based on your procedure.' },
      { q: 'What is laparoscopic surgery?', a: 'Laparoscopic surgery is a minimally invasive surgical technique in which procedures are performed through small incisions using specialised instruments and a camera. It may be suitable for certain procedures, depending on the patient\'s condition.' },
      { q: 'Is laparoscopic surgery suitable for everyone?', a: 'Not necessarily. The suitability of laparoscopic surgery depends on the condition being treated, its severity, the patient\'s medical history and other clinical factors. Your surgeon will recommend the most appropriate surgical approach after evaluation. Book a General Surgery Consultation' }
    ]
  },
  'paediatrics': {
    slug: 'paediatrics',
    name: 'Paediatrics',
    banner: 'Helping Children Grow Healthier, Stronger & Happier',
    subline: 'Expert Paediatric care for infants, children and adolescents, from routine health needs to acute and chronic conditions.',
    overview: { heading: 'Specialised Care for Your Child\'s Health & Well-being', paras: [
        'The Department of Paediatrics provides comprehensive medical care for infants, children and adolescents, with a focus on healthy growth, development, disease prevention and timely treatment. As a trusted Paediatrics hospital, our Paediatric specialists provide personalised care for common childhood illnesses, infections, nutritional concerns, allergies, respiratory conditions and other health conditions affecting children.',
        'From routine child health check-ups and immunisation to the diagnosis and management of acute and chronic illnesses, our team considers the child\'s age, growth, development and individual healthcare needs. We also work closely with other specialists when a child\'s condition requires further evaluation or multidisciplinary care.'
      ] },
    services: {
      heading: 'Our Comprehensive Range of Paediatric Services',
      intro: [
        'Our Paediatric services cover preventive care, diagnosis, treatment and long-term management across the different stages of childhood.'
      ],
      items: [
        { title: 'Child Health Check-ups', desc: 'Regular health assessments to monitor a child\'s growth, development, nutrition and overall well-being.' },
        { title: 'Immunisation & Vaccination', desc: 'Vaccination services to help protect children against vaccine-preventable diseases, according to the recommended immunisation schedule.' },
        { title: 'Growth & Development Assessment', desc: 'Monitoring physical growth and developmental milestones to identify concerns early and support timely intervention.' },
        { title: 'Newborn & Infant Care', desc: 'Medical assessment and care for newborns and infants, including feeding, growth, common illnesses and other early health concerns.' },
        { title: 'Acute Illness Management', desc: 'Diagnosis and treatment of common childhood illnesses such as fever, infections, vomiting, diarrhoea and respiratory illnesses.' },
        { title: 'Respiratory Care', desc: 'Evaluation and management of childhood respiratory conditions, including asthma, recurrent respiratory infections and breathing-related concerns.' },
        { title: 'Nutritional & Dietary Assessment', desc: 'Assessment of nutritional status, feeding concerns, undernutrition, overweight and other nutrition-related issues affecting growth and development.' },
        { title: 'Adolescent Healthcare', desc: 'Age-appropriate medical care and guidance addressing the physical and developmental health needs of adolescents.' },
        { title: 'Chronic Disease Management', desc: 'Ongoing care and monitoring for children living with chronic or recurring health conditions, with specialist referral when required.' },
        { title: 'Multispeciality Care Coordination', desc: 'When a child requires specialised evaluation or treatment, our Paediatric team coordinates care with relevant departments across the hospital.' }
      ]
    },
    symptoms: {
      heading: 'Signs That May Need Prompt Medical Evaluation',
      intro: [
        'Children may not always be able to clearly describe what they are experiencing. Parents and caregivers should seek medical evaluation if they notice:'
      ],
      items: [
        { title: 'Persistent or high fever', desc: 'Especially when fever continues, keeps returning or is accompanied by other concerning symptoms.' },
        { title: 'Difficulty breathing', desc: 'Rapid breathing, wheezing, breathlessness, chest retractions or visible difficulty breathing should be assessed promptly.' },
        { title: 'Poor feeding or difficulty feeding', desc: 'Particularly in infants, persistent feeding difficulties may require medical evaluation.' },
        { title: 'Persistent vomiting or diarrhoea', desc: 'Ongoing vomiting or diarrhoea can lead to dehydration and may require timely treatment.' },
        { title: 'Unusual sleepiness or reduced responsiveness', desc: 'A child who is unusually drowsy, difficult to wake or less responsive than normal needs prompt medical attention.' },
        { title: 'Poor weight gain or growth', desc: 'Falling behind expected growth patterns may require assessment of nutrition, development or underlying health conditions.' },
        { title: 'Repeated or persistent infections', desc: 'Frequent or unusually prolonged infections may need further evaluation by a Paediatric specialist.' },
        { title: 'Changes in behaviour or development', desc: 'Loss of previously acquired skills, developmental concerns or significant changes in behaviour should be discussed with a Paediatrician.' },
        { title: 'Persistent abdominal pain', desc: 'Recurrent or severe abdominal pain, particularly when accompanied by vomiting, fever or other symptoms, should be evaluated.' }
      ],
      important: 'Severe difficulty breathing, seizures, loss of consciousness, severe dehydration, blue or grey lips or skin, sudden weakness, severe bleeding or a child who is difficult to wake requires urgent medical attention and may require Emergency Care.'
    },
    conditions: {
      heading: 'Expert Care for a Wide Range of Childhood Conditions',
      intro: [
        'The Department of Paediatrics provides medical care for a broad range of conditions affecting infants, children and adolescents.'
      ],
      groups: [
      { title: 'Common Childhood Illnesses', items: [
          'Fever and febrile illnesses',
          'Common viral infections',
          'Bacterial infections',
          'Cough and cold',
          'Sore throat',
          'Gastroenteritis'
        ] },
      { title: 'Respiratory Conditions', items: [
          'Asthma',
          'Respiratory tract infections',
          'Bronchitis',
          'Pneumonia',
          'Recurrent respiratory infections',
          'Wheezing and breathing-related conditions'
        ] },
      { title: 'Gastrointestinal Conditions', items: [
          'Abdominal pain',
          'Vomiting',
          'Diarrhoea',
          'Constipation',
          'Gastrointestinal infections',
          'Feeding-related concerns'
        ] },
      { title: 'Nutritional Conditions', items: [
          'Nutritional deficiencies',
          'Undernutrition',
          'Poor weight gain',
          'Childhood obesity',
          'Vitamin and mineral deficiencies'
        ] },
      { title: 'Allergic & Immunological Conditions', items: [
          'Food allergies',
          'Allergic conditions',
          'Recurrent infections',
          'Selected immune-related disorders requiring specialist evaluation'
        ] },
      { title: 'Growth & Developmental Concerns', items: [
          'Growth disorders',
          'Developmental delays',
          'Delayed milestones',
          'Behavioural and developmental concerns',
          'Learning-related concerns requiring medical assessment'
        ] },
      { title: 'Endocrine & Metabolic Conditions', items: [
          'Childhood thyroid disorders',
          'Diabetes',
          'Growth-related endocrine conditions',
          'Other metabolic disorders requiring specialist care'
        ] },
      { title: 'Neurological Conditions', items: [
          'Headaches',
          'Seizure disorders',
          'Developmental neurological concerns',
          'Other neurological conditions requiring specialist evaluation'
        ] },
      { title: 'Other Paediatric Conditions', items: [
          'Anaemia',
          'Nutritional deficiencies',
          'Urinary tract infections',
          'Skin conditions',
          'Recurrent infections',
          'Chronic childhood illnesses'
        ] }
      ]
    },
    treatments: {
      heading: 'Personalised Treatment for Your Child\'s Needs',
      intro: [
        'Paediatric treatment is tailored to the child\'s age, weight, developmental stage, medical history and individual condition. Our team focuses on accurate diagnosis, appropriate treatment and regular follow-up while keeping the child\'s comfort and well-being at the centre of care.'
      ],
      items: [
        { title: 'Medical Management', desc: 'Age-appropriate medical treatment for acute illnesses, infections and other paediatric conditions.' },
        { title: 'Fever & Infection Management', desc: 'Assessment and treatment of childhood infections and persistent or unexplained fever.' },
        { title: 'Respiratory Treatment', desc: 'Medical management of asthma, respiratory infections, wheezing and other paediatric breathing conditions.' },
        { title: 'Fluid & Electrolyte Management', desc: 'Assessment and treatment of dehydration and fluid or electrolyte disturbances when clinically indicated.' },
        { title: 'Nutritional Management', desc: 'Guidance and treatment for nutritional deficiencies, feeding concerns, poor weight gain and other nutrition-related conditions.' },
        { title: 'Chronic Disease Management', desc: 'Ongoing monitoring and treatment for children living with chronic medical conditions.' },
        { title: 'Developmental Support & Referral', desc: 'Early identification of developmental concerns, followed by appropriate assessment, intervention or referral where required.' },
        { title: 'Follow-up & Preventive Care', desc: 'Regular follow-up to monitor recovery, growth, development, treatment response and overall health.' }
      ]
    },
    diagnostics: {
      heading: 'Child-Friendly Diagnostics for Accurate Care',
      intro: [
        'Accurate diagnosis is an important part of paediatric care. Depending on the child\'s age, symptoms and clinical assessment, the Paediatric team may coordinate laboratory investigations, imaging and other diagnostic services available across the hospital.'
      ],
      items: [
        { title: 'Blood investigations', desc: 'Blood tests may help evaluate infection, anaemia, nutritional status, blood sugar, kidney and liver function and other health parameters.' },
        { title: 'Urine and other laboratory investigations', desc: 'These may be used to assess urinary infections, kidney-related concerns, metabolic conditions and other medical problems.' },
        { title: 'Diagnostic imaging', desc: 'X-ray, ultrasound, CT or MRI may be recommended when clinically indicated and appropriate for the child\'s condition.' },
        { title: 'Growth & developmental assessment', desc: 'Monitoring height, weight, growth patterns and developmental milestones can help identify concerns early.' },
        { title: 'Specialist diagnostic support', desc: 'Where required, Paediatricians can coordinate evaluation with relevant specialists such as Neurology, Cardiology, Gastroenterology, Nephrology, Endocrinology and other departments.' }
      ]
    },
    doctors: {
      heading: 'Meet Our Paediatric Specialists',
      intro: [
        'Our Paediatric team provides comprehensive medical evaluation, treatment and preventive care for infants, children and adolescents.'
      ],
      names: [
        'Dr. Yerramilli Venkata Siva Sankara Murthy',
        'Dr. Vegesna Sunita',
        'Dr. Chandradeve Varna BSK',
        'Dr. Kanagarla Koteswara Rao',
        'Dr. Dantuluri Vineela',
        'Dr. Randhi Sowmya',
        'Dr. Sai Pratima Pedagopu',
        'Dr. R Sheshikanth',
        'Dr. Mariserla Srikanth',
        'Dr. Alavilli Sumasanthi'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital for Paediatrics?',
      intro: [],
      items: [
        { title: 'Child-Centred Care', desc: 'We focus on providing age-appropriate, personalised medical care while creating a comfortable experience for children and their families.' },
        { title: 'Experienced Paediatric Specialists', desc: 'Our Paediatric specialists bring clinical expertise to the diagnosis and management of a wide range of childhood health conditions.' },
        { title: 'Comprehensive Child Healthcare', desc: 'From preventive health and immunisation to the management of acute and chronic conditions, children can access a broad range of medical services.' },
        { title: 'Growth & Development Focus', desc: 'Regular assessment of growth, nutrition and developmental milestones helps identify potential concerns early.' },
        { title: 'Multidisciplinary Approach', desc: 'When a child requires specialist evaluation or treatment, our Paediatric team can coordinate care with relevant departments across the hospital.' },
        { title: 'Advanced Diagnostic Support', desc: 'Access to hospital-wide laboratory, imaging and diagnostic services supports accurate evaluation when investigations are required.' },
        { title: 'Continuity of Care', desc: 'From initial consultation and diagnosis to treatment and follow-up, our team supports children and families throughout their healthcare journey.' }
      ]
    },
    faqs: [
      { q: 'What does a Paediatrician treat?', a: 'A Paediatrician or child specialist doctor provides medical care for infants, children and adolescents, including common childhood illnesses, infections, respiratory conditions, nutritional concerns, growth and developmental concerns, and many acute and chronic conditions.' },
      { q: 'When should I take my child to a Paediatrician?', a: 'You should consider consulting a Paediatric doctor for children if your child has persistent fever, difficulty breathing, repeated infections, poor feeding, ongoing vomiting or diarrhoea, poor weight gain, developmental concerns or any symptoms that are persistent, unusual or worrying.' },
      { q: 'Does Paediatrics include vaccination and immunisation?', a: 'Paediatric care commonly includes vaccination and immunisation services. Vaccines should be given according to the applicable recommended schedule, with the paediatrician advising parents on age-appropriate vaccinations and any child health check-ups.' },
      { q: 'Can a Paediatrician help with my child\'s growth or developmental concerns?', a: 'Yes. Paediatricians can assess growth patterns and developmental milestones and identify concerns that may require further evaluation. Where necessary, they can coordinate assessment or referral to appropriate specialists or developmental services.' },
      { q: 'When should I take my child to Emergency Care instead of a Paediatrician?', a: 'Severe breathing difficulty, seizures, loss of consciousness, severe dehydration, significant bleeding, sudden weakness or a child who is difficult to wake requires urgent medical attention. In such situations, Emergency Care should be sought immediately.' }
    ]
  },
  'psychiatry': {
    slug: 'psychiatry',
    name: 'Psychiatry',
    banner: 'Better Mental Health Begins with the Right Support',
    subline: 'Specialised psychiatric care for mental health conditions, with personalised assessment, treatment and ongoing support.',
    overview: { heading: 'Understanding Mental Health, Supporting Better Living', paras: [
        'The Department of Psychiatry provides confidential, personalised care for a wide range of mental health concerns affecting mood, thoughts, behaviour and everyday functioning. As a trusted Psychiatry hospital, our Psychiatry specialists provide assessment and treatment for conditions such as depression, anxiety disorders, bipolar disorder, schizophrenia, sleep disorders and other mental health conditions.',
        'Whether you are seeking a Psychiatrist for anxiety and depression, support for persistent changes in mood or help managing a diagnosed mental health condition, our team takes a comprehensive approach to assessment and treatment. Treatment plans are developed according to each person\'s symptoms, medical history, circumstances and individual needs.',
        'Where required, our psychiatrists work with other medical specialists to consider physical health factors that may influence mental well-being and to provide coordinated care.'
      ] },
    services: {
      heading: 'Our Comprehensive Range of Psychiatric Services',
      intro: [
        'Our Psychiatry services focus on assessment, diagnosis, treatment and ongoing management of mental health conditions across different stages of life.'
      ],
      items: [
        { title: 'Psychiatric Assessment & Evaluation', desc: 'Comprehensive assessment of emotional, behavioural, cognitive and psychological symptoms to understand the individual\'s mental health needs.' },
        { title: 'Depression & Anxiety Management', desc: 'Assessment and treatment for depression, anxiety disorders, persistent low mood, excessive worry, panic symptoms and related conditions.' },
        { title: 'Mood Disorder Management', desc: 'Specialised care for mood disorders, including bipolar disorder and other conditions involving significant changes in mood and energy.' },
        { title: 'Psychotic Disorder Management', desc: 'Assessment and treatment for conditions involving hallucinations, delusions, disorganised thinking or significant changes in behaviour.' },
        { title: 'Stress & Emotional Health Support', desc: 'Medical assessment and appropriate treatment for mental health concerns associated with prolonged stress, emotional difficulties and life changes.' },
        { title: 'Sleep Disorder Management', desc: 'Evaluation and treatment of selected sleep problems when they are associated with or influenced by an underlying mental health condition.' },
        { title: 'Substance Use & Dependence Care', desc: 'Assessment and medical management of mental health conditions associated with alcohol or substance use, where appropriate.' },
        { title: 'Geriatric Psychiatry', desc: 'Assessment and management of mental health concerns affecting older adults, including mood, behavioural and cognitive changes.' },
        { title: 'Psychiatric Care for Adolescents', desc: 'Age-appropriate psychiatric assessment and treatment for adolescents experiencing significant emotional, behavioural or mental health concerns.' },
        { title: 'Multidisciplinary Mental Healthcare', desc: 'Where required, our Psychiatry team coordinates care with General Medicine, Neurology, Paediatrics and other relevant specialities.' }
      ]
    },
    symptoms: {
      heading: 'Mental Health Signs That Should Not Be Ignored',
      intro: [
        'Changes in mood, behaviour, thoughts or daily functioning can sometimes indicate an underlying mental health condition. Consider seeking professional evaluation if you or someone close to you experiences:'
      ],
      items: [
        { title: 'Persistent sadness or low mood', desc: 'Ongoing feelings of sadness, emptiness or hopelessness that interfere with everyday life may require assessment.' },
        { title: 'Excessive worry or anxiety', desc: 'Persistent worry, fear or anxiety that becomes difficult to control can affect sleep, work, relationships and daily activities.' },
        { title: 'Significant changes in sleep', desc: 'Persistent insomnia, excessive sleeping or major changes in sleep patterns may be associated with mental or physical health conditions.' },
        { title: 'Loss of interest or motivation', desc: 'Losing interest in activities that were previously enjoyable or experiencing a persistent lack of motivation may warrant evaluation.' },
        { title: 'Significant changes in behaviour', desc: 'Unusual or marked changes in behaviour, personality or social interaction should not be ignored.' },
        { title: 'Difficulty concentrating', desc: 'Persistent problems with attention, memory or decision-making may require professional assessment.' },
        { title: 'Mood swings or periods of unusually high energy', desc: 'Significant changes in mood, energy, activity or behaviour may require evaluation for a mood disorder.' },
        { title: 'Social withdrawal', desc: 'Increasing isolation or withdrawing from family, friends, work or usual activities may be a sign that someone is struggling with their mental health.' },
        { title: 'Unexplained physical symptoms', desc: 'Persistent headaches, fatigue, digestive problems or other physical symptoms may sometimes occur alongside mental health conditions and should be assessed appropriately.' },
        { title: 'Thoughts of self-harm or suicide', desc: 'Any thoughts about self-harm, suicide or harming another person require immediate professional help and urgent medical attention.' }
      ],
      important: 'If someone is at immediate risk of harming themselves or others, is severely confused, is experiencing a severe psychiatric crisis or is unable to care for themselves safely, seek urgent medical attention or Emergency Care.'
    },
    conditions: {
      heading: 'Expert Care for a Wide Range of Mental Health Conditions',
      intro: [
        'The Department of Psychiatry provides assessment and treatment for a broad range of mental health conditions.'
      ],
      groups: [
      { title: 'Depressive Disorders', items: [
          'Major depressive disorder',
          'Persistent depressive disorder',
          'Depression associated with other medical conditions',
          'Other depressive disorders'
        ] },
      { title: 'Anxiety & Stress-Related Disorders', items: [
          'Generalised anxiety disorder',
          'Panic disorder',
          'Phobias',
          'Stress-related conditions',
          'Adjustment disorders'
        ] },
      { title: 'Bipolar & Mood Disorders', items: [
          'Bipolar disorder',
          'Other mood disorders',
          'Significant mood disturbances'
        ] },
      { title: 'Psychotic Disorders', items: [
          'Schizophrenia',
          'Schizoaffective disorder',
          'Other psychotic disorders'
        ] },
      { title: 'Obsessive-Compulsive & Related Disorders', items: [
          'Obsessive-compulsive disorder',
          'Related anxiety and compulsive conditions'
        ] },
      { title: 'Trauma-Related Conditions', items: [
          'Post-traumatic stress disorder',
          'Trauma and stress-related disorders'
        ] },
      { title: 'Sleep-Related Mental Health Concerns', items: [
          'Insomnia associated with mental health conditions',
          'Sleep disturbances associated with anxiety, depression or other psychiatric conditions'
        ] },
      { title: 'Substance-Related Conditions', items: [
          'Alcohol use disorders',
          'Substance use disorders',
          'Mental health conditions associated with substance use'
        ] },
      { title: 'Cognitive & Behavioural Concerns', items: [
          'Behavioural changes',
          'Cognitive concerns requiring psychiatric assessment',
          'Selected neurocognitive disorders'
        ] },
      { title: 'Other Mental Health Conditions', items: [
          'Emotional and behavioural disorders',
          'Somatic symptom-related conditions',
          'Personality disorders',
          'Other psychiatric conditions requiring specialist evaluation'
        ] }
      ]
    },
    treatments: {
      heading: 'Personalised Treatment for Better Mental Well-being',
      intro: [
        'Treatment in Psychiatry is tailored to the individual\'s symptoms, diagnosis, medical history and personal circumstances. Depending on the condition, treatment may include medication, psychological interventions, lifestyle measures and ongoing psychiatric care.'
      ],
      items: [
        { title: 'Psychiatric Medication Management', desc: 'Appropriate medicines may be prescribed to manage symptoms of depression, anxiety, mood disorders, psychotic disorders and other psychiatric conditions.' },
        { title: 'Depression & Anxiety Treatment', desc: 'Individualised treatment plans to help manage persistent low mood, anxiety, panic symptoms and related mental health conditions.' },
        { title: 'Mood Disorder Management', desc: 'Ongoing treatment and monitoring for conditions such as bipolar disorder, with treatment adjusted according to the individual\'s clinical needs.' },
        { title: 'Psychosis Management', desc: 'Medical treatment and ongoing monitoring for conditions involving psychosis, including schizophrenia and related disorders.' },
        { title: 'Stress & Coping Support', desc: 'Assessment and appropriate interventions for mental health concerns associated with stress, significant life changes and emotional difficulties.' },
        { title: 'Sleep Management', desc: 'Assessment and treatment of sleep difficulties when they are associated with an underlying psychiatric condition.' },
        { title: 'Substance Use Management', desc: 'Medical and psychiatric support for individuals experiencing mental health concerns related to alcohol or substance use.' },
        { title: 'Long-Term Psychiatric Care', desc: 'Regular follow-up and treatment monitoring for patients requiring ongoing management of a mental health condition.' },
        { title: 'Family & Caregiver Support', desc: 'Where appropriate, families and caregivers may be provided with information and guidance to help support a person\'s ongoing mental healthcare.' }
      ]
    },
    diagnostics: {
      heading: 'Comprehensive Assessment for Accurate Psychiatric Care',
      intro: [
        'Psychiatric diagnosis is primarily based on detailed clinical assessment, discussion of symptoms, medical history and behavioural observations. Where clinically indicated, our psychiatrists may also recommend physical examinations, laboratory investigations or specialist evaluations to identify medical conditions that could contribute to or mimic psychiatric symptoms.'
      ],
      items: [
        { title: 'Psychiatric evaluation', desc: 'Detailed assessment of mood, thoughts, behaviour, sleep, functioning and other symptoms.' },
        { title: 'Mental status examination', desc: 'Clinical assessment of a person\'s appearance, behaviour, speech, mood, thought processes, perception, cognition and insight.' },
        { title: 'Psychological assessment', desc: 'Where clinically appropriate, structured assessments may support evaluation of cognitive, emotional or behavioural concerns.' },
        { title: 'Laboratory investigations', desc: 'Blood tests and other investigations may be recommended to identify medical or metabolic factors contributing to symptoms.' },
        { title: 'Cognitive assessment', desc: 'Selected patients may require assessment of memory, attention and other cognitive functions.' },
        { title: 'Specialist medical evaluation', desc: 'Psychiatry may coordinate with General Medicine, Neurology, Endocrinology or other relevant departments when physical health conditions may be contributing to mental health symptoms.' }
      ]
    },
    doctors: {
      heading: 'Meet Our Psychiatry Specialists',
      intro: [
        'Our Psychiatry team provides confidential assessment, diagnosis and personalised treatment for a wide range of mental health conditions.'
      ],
      names: [
        'Dr. Hemanth Madhav Gajarao',
        'Dr. Archana Vinnakota',
        'Dr. Deepthi Saka'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital for Psychiatry?',
      intro: [],
      items: [
        { title: 'Confidential & Patient-Centred Care', desc: 'We provide a respectful and confidential environment where patients can discuss their mental health concerns openly and without judgement.' },
        { title: 'Experienced Psychiatry Specialists', desc: 'Our psychiatrists bring clinical expertise to the assessment and management of a wide range of mental health conditions.' },
        { title: 'Personalised Treatment', desc: 'Treatment plans are developed around the individual\'s symptoms, diagnosis, medical history, circumstances and healthcare needs.' },
        { title: 'Comprehensive Mental Healthcare', desc: 'From initial psychiatric assessment to treatment and ongoing monitoring, patients can access comprehensive mental health support.' },
        { title: 'Multidisciplinary Approach', desc: 'When mental and physical health concerns overlap, our Psychiatry team can coordinate with other specialists across the hospital.' },
        { title: 'Focus on Long-Term Well-being', desc: 'Ongoing care and regular follow-up can help patients manage chronic mental health conditions and support better everyday functioning.' },
        { title: 'Support for Families & Caregivers', desc: 'Where appropriate, families and caregivers can receive guidance to better understand and support the patient\'s condition and treatment.' }
      ]
    },
    faqs: [
      { q: 'What does a Psychiatrist treat?', a: 'A Psychiatrist diagnoses and treats mental health conditions affecting mood, thoughts, behaviour and everyday functioning. These may include depression, anxiety disorders, bipolar disorder, schizophrenia, stress-related conditions and other psychiatric disorders.' },
      { q: 'What are the signs that I may need psychiatric care?', a: 'Persistent changes in mood, behaviour, thoughts, sleep or everyday functioning may indicate that professional support could be helpful. Symptoms such as prolonged sadness, excessive worry, severe mood changes, social withdrawal or difficulty managing daily activities should not be ignored.' },
      { q: 'What is the difference between a Psychiatrist and a Psychologist?', a: 'A Psychiatrist is a medical doctor who specialises in mental health and can assess medical factors contributing to psychiatric symptoms and prescribe medication when appropriate. Psychologists primarily provide psychological assessment and therapies. Depending on the individual\'s needs, both may be involved in mental healthcare.' },
      { q: 'Can Psychiatry help with anxiety and depression?', a: 'Yes. Psychiatric treatment for anxiety and depression may include medication, psychological interventions, lifestyle measures and regular follow-up, depending on the severity and nature of the condition.' },
      { q: 'Is psychiatric treatment confidential?', a: 'Mental healthcare is generally provided in a confidential and respectful setting. Your psychiatrist can explain how confidentiality works, including situations where information may need to be shared for safety or other legal and clinical reasons.' },
      { q: 'Can a Psychiatrist help with stress, sleep problems or emotional difficulties?', a: 'Yes. A Psychiatrist can assess whether persistent stress, sleep problems or emotional difficulties are related to an underlying mental health condition and recommend appropriate treatment. Depending on the individual\'s needs, this may include medication, psychological interventions, lifestyle changes or ongoing monitoring.' }
    ]
  },
  'pulmonary-medicine': {
    slug: 'pulmonary-medicine',
    name: 'Pulmonary Medicine',
    banner: 'Breathe Better. Live Better.',
    subline: 'Expert Pulmonary Medicine care for respiratory conditions, from persistent cough and asthma to complex lung disorders.',
    overview: { heading: 'Specialised Care for Your Respiratory Health', paras: [
        'The Department of Pulmonary Medicine provides comprehensive care for conditions affecting the lungs and respiratory system. Our Pulmonary Medicine and Respiratory Medicine specialists diagnose and treat a wide range of respiratory conditions, including asthma, chronic obstructive pulmonary disease, respiratory infections, pneumonia, sleep-related breathing disorders and other lung diseases.',
        'Whether you need a Pulmonary Medicine consultation for persistent cough or ongoing management of a chronic respiratory condition, our specialists use a personalised approach to diagnosis and treatment. We also work closely with Critical Care, General Medicine, Cardiology and other relevant specialities when patients require multidisciplinary care.'
      ] },
    services: {
      heading: 'Our Comprehensive Range of Pulmonary Medicine Services',
      intro: [
        'Our Pulmonary Medicine services cover the evaluation, diagnosis, treatment and long-term management of respiratory and lung conditions.'
      ],
      items: [
        { title: 'Respiratory Health Assessment', desc: 'Comprehensive evaluation of breathing difficulties, persistent cough, wheezing and other respiratory symptoms to identify potential underlying causes.' },
        { title: 'Asthma Management', desc: 'Diagnosis and long-term management of asthma, including assessment of symptoms, treatment plans and monitoring of disease control.' },
        { title: 'COPD Management', desc: 'Comprehensive care for Chronic Obstructive Pulmonary Disease (COPD), including symptom management, treatment optimisation and strategies to support better respiratory function.' },
        { title: 'Respiratory Infection Management', desc: 'Diagnosis and treatment of respiratory infections, including bronchitis, pneumonia and other infections affecting the respiratory system.' },
        { title: 'Chronic Cough Evaluation', desc: 'Systematic evaluation of persistent or recurrent cough to identify potential respiratory, allergic, gastrointestinal or other underlying causes.' },
        { title: 'Sleep-Related Breathing Disorders', desc: 'Assessment and management of breathing-related sleep disorders, including conditions associated with snoring, disrupted sleep and excessive daytime sleepiness.' },
        { title: 'Smoking-Related Lung Disease Management', desc: 'Evaluation and treatment of respiratory conditions associated with smoking and other inhaled exposures, along with support for smoking cessation.' },
        { title: 'Occupational & Environmental Lung Disease Care', desc: 'Assessment of respiratory problems associated with workplace exposures, air pollution, dust, chemicals and other environmental factors.' },
        { title: 'Pulmonary Rehabilitation & Lifestyle Management', desc: 'Where clinically appropriate, guidance on breathing exercises, physical activity, lifestyle measures and other strategies that may support respiratory health.' },
        { title: 'Multispeciality Respiratory Care', desc: 'For complex cases, our Pulmonary Medicine specialists coordinate care with General Medicine, Cardiology, Critical Care and other relevant departments.' }
      ]
    },
    symptoms: {
      heading: 'Respiratory Symptoms That Should Not Be Ignored',
      intro: [
        'Respiratory symptoms can sometimes be caused by minor illnesses, but persistent or worsening symptoms may require medical evaluation.'
      ],
      items: [
        { title: 'Persistent or recurrent cough', desc: 'A cough that continues for several weeks or repeatedly returns should be assessed to identify the underlying cause.' },
        { title: 'Shortness of breath', desc: 'Breathlessness during routine activities, at rest or when lying down may require medical evaluation.' },
        { title: 'Wheezing', desc: 'A whistling sound while breathing can occur with asthma and other airway or lung conditions.' },
        { title: 'Chest tightness', desc: 'Persistent or recurrent chest tightness may be associated with respiratory or other medical conditions and should be evaluated.' },
        { title: 'Coughing up blood', desc: 'Blood in sputum requires prompt medical assessment, particularly when it is recurrent or accompanied by breathlessness or chest pain.' },
        { title: 'Persistent phlegm or mucus production', desc: 'Excessive or ongoing sputum production may indicate an underlying respiratory condition.' },
        { title: 'Frequent respiratory infections', desc: 'Recurrent bronchitis, pneumonia or other respiratory infections may require further evaluation.' },
        { title: 'Breathlessness during sleep or excessive daytime sleepiness', desc: 'These may be associated with sleep-related breathing disorders and warrant assessment.' },
        { title: 'Unexplained fatigue or reduced exercise tolerance', desc: 'Reduced ability to perform usual physical activities may sometimes be linked to an underlying respiratory condition.' }
      ],
      important: 'Severe or sudden breathlessness, blue or grey lips or skin, coughing up significant amounts of blood, severe chest pain, confusion or loss of consciousness requires urgent medical attention and may require Emergency Care.'
    },
    conditions: {
      heading: 'Expert Care for a Wide Range of Respiratory Conditions',
      intro: [
        'The Department of Pulmonary Medicine provides diagnosis and treatment for a broad range of lung and respiratory conditions.'
      ],
      groups: [
      { title: 'Obstructive Lung Diseases', items: [
          'Asthma',
          'Chronic obstructive pulmonary disease (COPD)',
          'Chronic bronchitis',
          'Emphysema',
          'Other obstructive airway conditions'
        ] },
      { title: 'Respiratory Infections', items: [
          'Pneumonia',
          'Bronchitis',
          'Respiratory tract infections',
          'Tuberculosis',
          'Other respiratory infections'
        ] },
      { title: 'Interstitial & Diffuse Lung Diseases', items: [
          'Interstitial lung disease',
          'Pulmonary fibrosis',
          'Other diffuse parenchymal lung disorders'
        ] },
      { title: 'Sleep-Related Breathing Disorders', items: [
          'Obstructive sleep apnoea',
          'Sleep-related breathing disorders',
          'Sleep-related hypoventilation'
        ] },
      { title: 'Pleural Conditions', items: [
          'Pleural effusion',
          'Pneumothorax',
          'Other pleural disorders'
        ] },
      { title: 'Occupational & Environmental Lung Conditions', items: [
          'Occupational lung diseases',
          'Exposure-related respiratory conditions',
          'Pollution-related respiratory problems'
        ] },
      { title: 'Pulmonary Vascular Conditions', items: [
          'Pulmonary hypertension',
          'Other pulmonary vascular disorders requiring specialist evaluation'
        ] },
      { title: 'Other Respiratory Conditions', items: [
          'Chronic cough',
          'Unexplained breathlessness',
          'Wheezing',
          'Recurrent respiratory infections',
          'Respiratory complications associated with other medical conditions'
        ] }
      ]
    },
    treatments: {
      heading: 'Personalised Treatment for Better Respiratory Health',
      intro: [
        'Treatment is tailored to the underlying respiratory condition, its severity and the patient\'s overall health. Depending on the diagnosis, management may involve medication, inhaled therapies, lifestyle measures, respiratory rehabilitation and ongoing monitoring.'
      ],
      items: [
        { title: 'Inhaled Medication Therapy', desc: 'Appropriate inhaled medicines may be prescribed to manage airway inflammation, improve airflow and control respiratory symptoms.' },
        { title: 'Asthma Treatment & Management', desc: 'Individualised treatment plans to control symptoms, reduce exacerbations and support long-term asthma management.' },
        { title: 'COPD Management', desc: 'Treatment aimed at controlling symptoms, reducing exacerbations and maintaining functional capacity and quality of life.' },
        { title: 'Infection Management', desc: 'Appropriate medical treatment for respiratory infections based on clinical assessment and, where required, diagnostic findings.' },
        { title: 'Oxygen Therapy', desc: 'Oxygen supplementation may be used when clinically indicated for patients with low blood oxygen levels.' },
        { title: 'Smoking Cessation Support', desc: 'Guidance and support to help patients stop smoking and reduce the risk of further respiratory damage.' },
        { title: 'Pulmonary Rehabilitation', desc: 'Structured breathing, exercise and lifestyle interventions may help selected patients improve physical function and manage chronic respiratory conditions.' },
        { title: 'Long-Term Respiratory Disease Management', desc: 'Regular follow-up and treatment optimisation for patients living with chronic respiratory diseases.' }
      ]
    },
    diagnostics: {
      heading: 'Advanced Diagnostics for Accurate Respiratory Care',
      intro: [
        'Accurate assessment is essential for identifying the underlying cause of respiratory symptoms. Depending on the patient\'s condition, our Pulmonary Medicine specialists may coordinate laboratory tests, lung function assessment, imaging and other diagnostic investigations.'
      ],
      items: [
        { title: 'Pulmonary Function Tests (PFTs)', desc: 'Lung function testing can help assess airflow, lung capacity and respiratory function in conditions such as asthma and COPD.' },
        { title: 'Spirometry', desc: 'A commonly used lung function test to assess how much air a person can breathe out and how quickly.' },
        { title: 'Chest X-ray', desc: 'May help identify infections, lung abnormalities and other causes of respiratory symptoms.' },
        { title: 'CT Chest', desc: 'Detailed imaging may be recommended when more comprehensive assessment of the lungs or chest is required.' },
        { title: 'Blood investigations', desc: 'Blood tests may help evaluate infection, inflammation, oxygenation and other factors relevant to respiratory conditions.' },
        { title: 'Sputum investigations', desc: 'Sputum testing may help identify certain respiratory infections and other causes of persistent respiratory symptoms.' },
        { title: 'Sleep-related investigations', desc: 'Where available and clinically indicated, sleep studies may be used to evaluate suspected sleep-related breathing disorders.' },
        { title: 'Specialist diagnostic support', desc: 'Pulmonary Medicine physicians may coordinate investigations with General Medicine, Cardiology, Critical Care, Radiology and other relevant departments.' }
      ]
    },
    doctors: {
      heading: 'Meet Our Pulmonary Medicine Specialists',
      intro: [
        'Our Pulmonary Medicine specialists provide comprehensive evaluation, diagnosis and treatment for a wide range of respiratory and lung conditions.'
      ],
      names: [
        'Dr. Akasapu Ayyappa',
        'Dr. Teela Venkateswara Rao',
        'Dr. Surampalli Koutilya',
        'Dr. Bhima Bhanu Prakash Avanapu'
      ]
    },
    why: {
      heading: 'Why Choose MIMS Hospital for Pulmonary Medicine?',
      intro: [],
      items: [
        { title: 'Comprehensive Respiratory Care', desc: 'From common respiratory infections and persistent cough to chronic lung conditions, patients can access comprehensive respiratory care.' },
        { title: 'Experienced Pulmonary Specialists', desc: 'Our specialists bring expertise in the diagnosis and management of a wide range of respiratory and lung conditions.' },
        { title: 'Accurate Diagnostic Evaluation', desc: 'A systematic approach to symptoms and access to relevant diagnostic services can help identify the underlying cause of respiratory problems.' },
        { title: 'Personalised Treatment Plans', desc: 'Treatment is tailored to the patient\'s diagnosis, symptoms, severity, lifestyle and overall health.' },
        { title: 'Multidisciplinary Care', desc: 'When respiratory conditions involve other organs or require critical care, our Pulmonary Medicine team can coordinate with relevant specialists across the hospital.' },
        { title: 'Chronic Disease Management', desc: 'Patients with asthma, COPD and other long-term respiratory conditions can receive ongoing monitoring and treatment optimisation.' },
        { title: 'Continuity of Care', desc: 'From initial evaluation and diagnosis to treatment and follow-up, our team supports patients throughout their respiratory healthcare journey.' }
      ]
    },
    faqs: [
      { q: 'What does a Pulmonary Medicine specialist treat?', a: 'A Pulmonary Medicine specialist diagnoses and treats conditions affecting the lungs and respiratory system, including asthma, COPD, pneumonia, chronic cough, sleep-related breathing disorders, interstitial lung diseases and other respiratory conditions.' },
      { q: 'When should I see a Pulmonary Medicine specialist?', a: 'You should consider a Respiratory Medicine consultation for persistent cough, recurring respiratory infections, unexplained breathlessness, wheezing, chest tightness or other respiratory symptoms that persist or worsen.' },
      { q: 'Can Pulmonary Medicine help with asthma and COPD?', a: 'Yes. Pulmonary Medicine specialists provide diagnosis, treatment and long-term management for asthma and COPD. Treatment may include inhaled medicines, lifestyle measures, monitoring and other therapies based on the patient\'s condition.' },
      { q: 'What tests may be done for breathing problems?', a: 'Depending on your symptoms and clinical assessment, your doctor may recommend lung function tests such as spirometry, blood tests, chest X-ray, CT imaging, sputum testing or other investigations to identify the cause of your respiratory symptoms.' },
      { q: 'When is a cough considered serious?', a: 'A persistent or recurrent cough, particularly when accompanied by breathlessness, chest pain, coughing up blood, unexplained weight loss, fever or other concerning symptoms, should be medically evaluated.' }
    ]
  },
};
