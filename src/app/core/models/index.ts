export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
  /** Renders the wide two-column speciality panel instead of a plain submenu. */
  mega?: boolean;
}

export interface Doctor {
  name: string;
  department: string;
  slug: string;
  qualifications?: string;
  designation?: string;
}

export type SpecialityGroup = 'general' | 'super';

export interface Speciality {
  slug: string;
  name: string;
  group: SpecialityGroup;
  blurb: string;
  summary: string;
  icon: string;
  image: string;
}

export interface TitledItem {
  title: string;
  desc: string;
}

export interface ConditionGroup {
  title: string;
  items: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface SpecialityBlock {
  heading: string;
  intro: string[];
  items: TitledItem[];
}

export interface SpecialityDetail {
  slug: string;
  name: string;
  banner: string;
  subline: string;
  overview: { heading: string; paras: string[] };
  services: SpecialityBlock;
  symptoms: SpecialityBlock & { important: string };
  conditions: { heading: string; intro: string[]; groups: ConditionGroup[] };
  treatments: SpecialityBlock;
  diagnostics: SpecialityBlock;
  doctors: { heading: string; intro: string[]; names: string[] };
  why: SpecialityBlock;
  faqs: Faq[];
}
