const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const cache = new Map();
function load(filename) {
  filename = path.resolve(filename);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (name) => load(path.resolve(path.dirname(filename), name + '.ts'))
  }, { filename });
  return module.exports;
}
const base = path.resolve(__dirname, '../src/app/core/data');
const { SPECIALITIES, GENERAL_SPECIALITIES, SUPER_SPECIALITIES, EMERGENCY_CARE, findSpeciality } = load(path.join(base, 'specialities.ts'));
const { SPECIALITY_DETAILS } = load(path.join(base, 'speciality-details.ts'));
const { DOCTORS } = load(path.join(base, 'doctors.ts'));
const { SITE, MAIN_NAV } = load(path.join(base, 'site.ts'));
assert.equal(SPECIALITIES.length, 22);
assert.equal(Object.keys(SPECIALITY_DETAILS).length, 23);
assert.equal(GENERAL_SPECIALITIES.length, 8);
assert.equal(SUPER_SPECIALITIES.length, 14);
assert(!SPECIALITIES.some((s) => s.slug === 'emergency-care'));
assert.equal(EMERGENCY_CARE.group, 'emergency');
assert.equal(findSpeciality('emergency-care').slug, 'emergency-care');
assert(MAIN_NAV.some((item) => item.label === 'Emergency Care' && item.path === '/specialities/emergency-care'));
assert.equal(SITE.email, 'contact@mimshospitals.com');
assert.equal(SITE.phones.length, 3);
assert(!DOCTORS.some((d) => /uma\s*devi/i.test(d.name)));
assert.equal(new Set(DOCTORS.map((d) => d.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '|' + d.department)).size, DOCTORS.length);
assert(SPECIALITIES.every((s, i) => !i || SPECIALITIES[i - 1].name.localeCompare(s.name, 'en') <= 0));
for (const speciality of [...SPECIALITIES, EMERGENCY_CARE]) {
  const d = SPECIALITY_DETAILS[speciality.slug];
  assert(d, speciality.slug);
  assert(speciality.summary.length > 80, speciality.slug + ' directory summary');
  assert(speciality.blurb.length > 20, speciality.slug + ' homepage blurb');
  assert(d.banner && d.subline && d.overview.paras.length >= 2, speciality.slug + ' overview');
  for (const section of ['services', 'symptoms', 'treatments', 'diagnostics', 'why']) {
    assert(d[section].heading && d[section].items.length, speciality.slug + ' ' + section);
  }
  assert(d.conditions.groups.length && d.faqs.length >= 5, speciality.slug + ' conditions and FAQs');
  assert(d.faqs.every((f) => f.q && f.a), speciality.slug + ' complete FAQ');
  for (const name of d.doctors.names) {
    assert(DOCTORS.some((doctor) => doctor.name.replace(/[^a-z0-9]/gi, '').toLowerCase() === name.replace(/[^a-z0-9]/gi, '').toLowerCase()), 'Missing doctor: ' + name);
  }
}
assert(DOCTORS.find((d) => d.name === 'Dr. Palivela Kasi Viswanath').schedule.length);
assert(DOCTORS.find((d) => d.name === 'Dr. Mrutyunjayarao').schedule.length);
assert(DOCTORS.some((d) => d.department === 'Emergency & Critical Care'));
assert(fs.readFileSync(path.join(base, '../../../../public/api/send-form.php'), 'utf8').includes('queries@mimshospitals.com'));
const home = fs.readFileSync(path.join(base, '../../home/home.component.html'), 'utf8');
assert(!/testimonial/i.test(home));
assert(home.indexOf('<app-emergency-highlight') < home.indexOf('class="about"'));
assert.equal((home.match(/<app-emergency-highlight/g) || []).length, 1);
assert(home.indexOf('<app-emergency-highlight') < home.indexOf('class="hero__controls"'));
assert(home.includes('[class.hero--emergency]="slides[active()].emergency"'));
const emergencyModule = fs.readFileSync(path.join(base, '../../shared/emergency-highlight/emergency-highlight.component.ts'), 'utf8');
for (const title of ['Emergency Care', 'Critical Care', 'ICU', 'CICU']) {
  assert(emergencyModule.includes(`title: '${title}'`));
}
const popup = fs.readFileSync(path.join(base, '../../shared/appointment-popup/appointment-popup.component.html'), 'utf8');
assert(popup.includes('assets/images/logo.png'));
assert(popup.includes('site.phones') && popup.includes('site.emailHref'));
assert(!popup.includes('confirm availability'));
console.log(`Verified 22 specialities (8 general, 14 super), separate Emergency Care, ${DOCTORS.length} roster entries, simplified popup and no testimonials.`);
