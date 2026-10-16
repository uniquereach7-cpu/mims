"""Read the approved DOCX files and emit an apply_patch patch (never modify Word sources)."""
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET
import json
import re
import difflib

ROOT = Path(__file__).resolve().parents[1]
FOLDER = ROOT / 'src/assets/content/final content'
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
MAPPING = {
 'ENT': ('ent', 'E.N.T.'), 'General Medicine': ('general-medicine', 'General Medicine'),
 'General Surgery': ('general-surgery', 'General Surgery'),
 'Obstetrics & Gynaecology': ('obstetrics-gynaecology', 'Obstetrics & Gynaecology'),
 'Orthopaedics & Joint Replacement': ('orthopaedics-joint-replacement', 'Orthopaedics & Joint Replacement'),
 'Paediatrics': ('paediatrics', 'Paediatrics'), 'Psychiatry': ('psychiatry', 'Psychiatry'),
 'Pulmonary Medicine': ('pulmonary-medicine', 'Pulmonary Medicine'),
 'Cardiology': ('cardiology', 'Cardiology'), 'Endocrinology': ('endocrinology', 'Endocrinology'),
 'Head & Neck  Robotic Oncosurgery': ('head-neck-robotic-oncosurgery', 'Head & Neck / Robotic Oncosurgery'),
 'INTERVENTIONAL RADIOLOGY': ('interventional-radiology', 'Interventional Radiology'),
 'Medical Gastroenterology': ('medical-gastroenterology', 'Medical Gastroenterology'),
 'Nephrology': ('nephrology', 'Nephrology'), 'Neurology': ('neurology', 'Neurology'),
 'Neurosurgery': ('neurosurgery', 'Neurosurgery'), 'OPHTHALMOLOGY': ('ophthalmology', 'Ophthalmology'),
 'Plastic & Reconstructive Surgery': ('plastic-reconstructive-surgery', 'Plastic & Reconstructive Surgery'),
 'Radiation Oncology': ('radiation-oncology', 'Radiation Oncology'), 'Rheumatology': ('rheumatology', 'Rheumatology'),
 'Surgical Gastroenterology': ('surgical-gastroenterology', 'Surgical Gastroenterology'), 'Urology': ('urology', 'Urology'),
 'EMERGENCY CARE PAGE': ('emergency-care', 'Emergency Care')
}
ALIASES = {
 'Dr. M. Srikanth':'Dr. Matha Srikanth',
 'Dr. Siripurapu Govinda':'Dr. Siripurapu Govind',
 'Dr. Mohan V. Sumedha Maturu':'Dr. K. Mohan V. Sumedha Maturu',
 'Dr. G. Srinivas Susheel':'Dr. Gumpina Srinivas Susheel',
 'Dr. Rajesh Babu D.':'Dr. Rajesh Babu Devabhaktuni',
 'Dr. Krishna Chaitanya Bevara':'Dr. Krishna Chaithanya Bevara',
 'Dr. Hemanth N. Varma D':'Dr. Hemanth N. Varma D.',
 'Dr. R Sheshikanth':'Dr. R. Sheshikanth'
}

def records(path):
 with ZipFile(path) as z:
  tree = ET.fromstring(z.read('word/document.xml'))
 rows = []
 for p in tree.findall('.//w:p', NS):
  pieces=[]
  for e in p.iter():
   if e.tag == '{'+NS['w']+'}t': pieces.append(e.text or '')
   elif e.tag in ['{'+NS['w']+'}br', '{'+NS['w']+'}tab']: pieces.append(' ')
  text=re.sub(r'\s+', ' ', ''.join(pieces)).strip()
  # Repair missing spaces at run boundaries, without changing clinical wording.
  text=re.sub(r'(?<=[a-z)])(?=MBBS|Consultant|Consultation:|Available Full Time|Availability:|Time:)', ' ', text)
  if text: rows.append({'text':text, 'bullet':p.find('./w:pPr/w:numPr', NS) is not None,
                        'bold':p.find('.//w:b', NS) is not None})
 return rows

def marker(text):
 s=re.sub(r'[^a-z &]+',' ',text.lower()).strip()
 markers={'banner line':'banner', 'banner':'banner', 'line below the banner':'subline', 'line below banner':'subline',
 'brief overview':'overview', 'services section':'services','symptoms section':'symptoms',
 'symptoms & signs section':'symptoms','symptoms & conditions that may require evaluation':'symptoms',
 'conditions section':'conditions','treatments section':'treatments','treatments & procedures section':'treatments',
 'diagnostics section':'diagnostics','doctors section':'doctors','why choose section':'why',
 'all specialities section':'related','other specialities section':'related','all specialities':'related',
 'faqs section':'faqs','frequently asked questions':'faqs',
 'overview':'overview','emergency services':'services','when to seek emergency care':'symptoms',
 'conditions we assess':'conditions','emergency treatment & diagnostics':'treatments','doctor name':'doctors'}
 return markers.get(s)

def split_item(text):
 pair=re.split(r'\s+[–—-]\s+', text, maxsplit=1)
 return {'title':pair[0], 'desc':pair[1] if len(pair)>1 else ''}

def block(rows, default):
 rows=list(rows)
 heading=rows.pop(0)['text'] if rows and not rows[0]['bullet'] else default
 result={'heading':heading, 'intro':[], 'items':[], 'subsections':[]}
 current=result
 started=False
 for r in rows:
  s=r['text']
  pair=split_item(s)
  is_item=r['bullet'] or bool(pair['desc'])
  if is_item:
   current['items'].append(pair); started=True
  elif r['bold'] and len(s)<110 and not s.endswith(('.',':')) and started:
   current={'heading':s, 'intro':[], 'items':[]}
   result['subsections'].append(current)
  elif started and len(s)<110 and not s.endswith(('.',':')):
   current['items'].append(pair)
  else: current['intro'].append(s)
 return result

def parse(path):
 slug,name=MAPPING[path.stem]
 raw=records(path)[1:]
 sections={}; key=None
 custom={
 'Our Orthopaedic Services':'services','Our Urology Services':'services',
 'Symptoms That May Require Orthopaedic Evaluation':'symptoms','Symptoms That May Require Urological Evaluation':'symptoms',
 'Conditions We Treat':'conditions','Treatments & Procedures':'treatments',
 'Orthopaedic Diagnostics':'diagnostics','Urology Diagnostics':'diagnostics',
 'Orthopaedic Doctors':'doctors','Urology Doctors':'doctors',
 'Why Choose MIMS for Orthopaedics & Joint Replacement?':'why','Why Choose MIMS for Urology?':'why'}
 for r in raw:
  s=r['text']
  if re.match(r'^CTA\b',s,re.I):continue
  if s in custom:
   key=custom[s];sections.setdefault(key,[]).append(r);continue
  inline=re.match(r'^(Banner Line|Line [Bb]elow (?:the )?[Bb]anner)\s*:\s*(.+)$',s)
  if inline:
   key='banner' if inline[1]=='Banner Line' else 'subline';sections[key]=[dict(r,text=inline[2])];continue
  m=marker(s)
  if m:
   key=m;sections.setdefault(key,[])
   if s=='Frequently Asked Questions':sections[key].append(r)
   continue
  if key=='subline' and slug in ['urology','orthopaedics-joint-replacement'] and s==name:
   key='overview';sections[key]=[r];continue
  if key:sections.setdefault(key,[]).append(r)
 for k in ['banner','overview','services','symptoms','conditions','treatments','doctors','why','faqs']:
  assert sections.get(k), (path.name,k)
 if slug=='emergency-care':
  sections['subline']=sections['banner'][1:]
  sections['banner']=sections['banner'][:1]
  sections['banner'][0]['text']=sections['banner'][0]['text'].replace('Emergencyl','Emergency')
  sections['diagnostics']=[{'text':'Emergency Diagnostic Support','bullet':False,'bold':True}]
  treat=[]
  for r in sections['treatments']:
   if any(r['text'].startswith(t) for t in ['Laboratory Investigations','ECG & Cardiac Assessment','Diagnostic Imaging']):sections['diagnostics'].append(r)
   else:treat.append(r)
  sections['treatments']=treat
 result={'slug':slug,'name':name,'banner':sections['banner'][0]['text'],
  'subline':' '.join(r['text'] for r in sections.get('subline',[]))}
 overview=sections['overview']
 result['overview']={'heading':overview[0]['text'],'paras':[r['text'] for r in overview[1:]]}
 for k in ['services','symptoms','treatments','diagnostics','why']:
  result[k]=block(sections[k],k.title())
 result['symptoms']['important']=''
 for field in ['intro','items']:
  kept=[]
  for row in result['symptoms'][field]:
   s=row if isinstance(row,str) else row['title']
   if s.startswith(('Important:','Seek urgent medical attention')):result['symptoms']['important']=s.removeprefix('Important:').strip()
   else:kept.append(row)
  result['symptoms'][field]=kept
 cond=sections['conditions'];groups=[];intro=[];heading=cond[0]['text']
 for r in cond[1:]:
  s=r['text']
  if not r['bullet'] and r['bold'] and len(s)<105 and not s.endswith(('.',':')):
   groups.append({'title':s,'items':[]})
  elif r['bullet']:
   if not groups:groups.append({'title':'','items':[]})
   groups[-1]['items'].append(s)
  else:intro.append(s)
 result['conditions']={'heading':heading,'intro':intro,'groups':groups}
 docrows=sections['doctors']; profiles=[];dintro=[];dheading='Meet Our Specialists'
 for r in docrows:
  s=r['text']
  if s.startswith('Dr.'):
   s=ALIASES.get(s,s)
   profiles.append({'name':s,'department':name,'slug':re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-'), 'qualifications':'','designation':'','schedule':[]})
  elif profiles:
   if re.match(r'^(Consultation|Availability|Available|Time:|Video Consultation)',s):profiles[-1]['schedule'].append(s)
   elif re.search(r'^(?:Senior |Sr\. |Chief |Visiting )?Consultant',s):
    pair=re.split(r' (?=MBBS|MD,|MS,|MDS\b)',s,maxsplit=1)
    profiles[-1]['designation']=pair[0]
    if len(pair)>1:profiles[-1]['qualifications']=pair[1]
   elif re.match(r'^(MBBS|MD\b|MS\b|MDS\b|DNB\b|DM\b|MCh\b)',s):
    pair=re.split(r' (?=(?:Senior |Chief )?Consultant)',s,maxsplit=1)
    profiles[-1]['qualifications']=pair[0]
    if len(pair)>1:profiles[-1]['designation']=pair[1]
   elif s.startswith('The Critical Care team'):dintro.append(s)
   else:profiles[-1]['schedule'].append(s)
  elif not dintro and (s.startswith('Meet ') or s.endswith('Doctors')):dheading=s
  else:dintro.append(s)
 result['doctors']={'heading':dheading,'intro':dintro,'names':[p['name'] for p in profiles], 'profiles':profiles}
 related=sections.get('related',[])
 result['relatedHeading']=related[0]['text'] if related and related[0]['text'].startswith('Explore ') else 'Explore Other Specialities for Comprehensive Care'
 result['relatedIntro']=[r['text'] for r in related if len(r['text'])>110]
 faqs=[]
 for r in sections['faqs']:
  s=r['text']
  if s.lower()=='frequently asked questions':continue
  if s.endswith('?'):
   faqs.append({'q':re.sub(r'^\d+\.\s*','',s),'a':''})
  else:
   assert faqs, (slug,'FAQ answer before question',s)
   faqs[-1]['a']+=(' ' if faqs[-1]['a'] else '')+s
 assert faqs and all(x['a'] for x in faqs),slug
 result['faqs']=faqs
 return result

details={}
for path in sorted(FOLDER.rglob('*.docx')):
 if path.stem in MAPPING:
  d=parse(path);details[d['slug']]=d
assert len(details)==23
# Refresh the directory summaries and homepage blurbs directly from the final page documents.
summaries={};current=None
for r in records(FOLDER/'OUR SPECIALITIES.docx'):
 s=re.sub(r'^\d+\.\s*', '', r['text'])
 for slug,name in MAPPING.values():
  if s in [name,name.replace(' / ',' ')] or (slug=='ent' and s=='ENT'):current=slug
 if s.startswith('The Department of ') and current:summaries[current]=s
blurbs={}
for r in records(FOLDER/'Home page.docx'):
 parts=re.split(r'\s+–\s+',r['text'],maxsplit=1)
 if len(parts)==2:
  for slug,name in MAPPING.values():
   if parts[0] in [name,name.replace(' / ',' ')]:blurbs[slug]=parts[1]
data="import { SpecialityDetail } from '../models';\n\n// Imported from assets/content/final content. Do not publish editorial labels or outdated contact data.\nexport const SPECIALITY_DETAILS: Record<string, SpecialityDetail> = "+json.dumps(details,ensure_ascii=False,indent=2)+";\n"
assert len(summaries)==23, ('Directory summary count',len(summaries))
assert len(blurbs)==22
updates=[]
for detail in details.values():
 for profile in detail['doctors']['profiles']:
  if profile['name']=='Dr. Nallana Prasad' and profile['department']=='General Surgery':continue
  entry=dict(profile)
  if entry['department']=='Emergency Care':entry['department']='Emergency & Critical Care'
  entry={k:v for k,v in entry.items() if v}
  if entry.get('schedule')==['Consultation: To be updated']:entry['schedule']=['Please call to confirm consultation availability.']
  updates.append(entry)
directory="import { Doctor } from '../models';\n\n// Latest approved directory copy and department doctor updates.\n"
directory+="export const FINAL_SPECIALITY_SUMMARIES: Record<string, string> = "+json.dumps(summaries,ensure_ascii=False,indent=2)+";\n"
directory+="\nexport const FINAL_SPECIALITY_BLURBS: Record<string, string> = "+json.dumps(blurbs,ensure_ascii=False,indent=2)+";\n"
directory+="\nexport const FINAL_DOCTOR_UPDATES: Doctor[] = "+json.dumps(updates,ensure_ascii=False,indent=2)+";\n"
print('*** Begin Patch')
for filename,content in [('speciality-details.ts',data),('speciality-directory-content.ts',directory)]:
 target=ROOT/'src/app/core/data'/filename
 if target.exists():
  previous=target.read_text()
  if previous==content:continue
  print('*** Update File: '+str(target))
  for line in list(difflib.unified_diff(previous.splitlines(),content.splitlines(),n=3))[2:]:
   print('@@' if line.startswith('@@') else line)
 else:
  print('*** Add File: '+str(target))
  for line in content.splitlines():print('+'+line)
print('*** End Patch')
