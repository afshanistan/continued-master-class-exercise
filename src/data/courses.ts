/**
 * The 16 Master Classes shown in the catalog.
 *
 * Source: speechpathology.com/master-class and each course page (pulled Nov 10, 2026).
 * Outcomes are condensed from each course's learning objectives (~100 characters each, Nov 10).
 * "New" = the two most recently created courses (2024).
 * School-Based Teletherapy: its course page redirects to the catalog, so its
 * details are placeholders (placeholder: true).
 */
import aacEarlyIntervention from '../assets/courses/aac-early-intervention.jpg';
import adultAac from '../assets/courses/adult-aac-implementation.jpg';
import agingInPlace from '../assets/courses/aging-in-place.jpg';
import clinicalTopicsDysphagia from '../assets/courses/clinical-topics-dysphagia.jpg';
import cognitiveNeurorehab from '../assets/courses/cognitive-neurorehabilitation.jpg';
import dirfloortime from '../assets/courses/dirfloortime.jpg';
import lewyBody from '../assets/courses/lewy-body-dementia.jpg';
import motorPlanning from '../assets/courses/motor-planning.jpg';
import otSlpCollab from '../assets/courses/ot-slp-collaboration-children.jpg';
import parkinsons from '../assets/courses/parkinsons-amplitude.jpg';
import pediatricDysphagia from '../assets/courses/pediatric-dysphagia.jpg';
import picu from '../assets/courses/picu-rehabilitation-trends.jpg';
import playIsFundamental from '../assets/courses/play-is-fundamental.jpg';
import polypharmacy from '../assets/courses/polypharmacy-covid-dysphagia.jpg';
import schoolTeletherapy from '../assets/courses/school-teletherapy.jpg';
import thinkingAboutThinking from '../assets/courses/thinking-about-thinking.jpg';

export type Topic = 'neuro' | 'dysphagia' | 'aac' | 'language' | 'early-intervention' | 'dementia';
export type Discipline = 'OT' | 'PT';

export const TOPIC_LABELS: Record<Topic, string> = {
  neuro: 'Neuro',
  dysphagia: 'Dysphagia',
  aac: 'AAC',
  language: 'Language',
  'early-intervention': 'Early Intervention',
  dementia: 'Dementia',
};

export interface Course {
  id: string;
  /** Short title as listed on the Master Class index page. */
  title: string;
  /** Full course title from the course page. */
  fullTitle: string;
  url: string;
  topic: Topic;
  /** Disciplines co-teaching with the SLP. Empty = SLP only. */
  taughtWith: Discipline[];
  /** Overrides the "Taught by" line when the presenter isn't an SLP. */
  taughtByNote?: string;
  /** Sentence that follows "You'll learn to", condensed from the course's learning objectives. */
  outcome: string;
  hours: number;
  reviews: number;
  /** "Course created" date on the course page (YYYY-MM-DD). */
  created: string;
  isNew: boolean;
  image: string;
  /** True where the data could not be verified from the course page. */
  placeholder?: boolean;
}

const BASE = 'https://www.speechpathology.com/slp-ceus/course/';

export const courses: Course[] = [
  { id: 'parkinsons-amplitude', title: "An Interprofessional Approach for Parkinson's", fullTitle: "An Amplitude-Focused Interprofessional Approach for Parkinson's Disease, In Partnership with LSVT Global", url: BASE + 'amplitude-focused-interprofessional-approach-for-1033821', topic: 'neuro', taughtWith: ['OT', 'PT'], outcome: "apply LSVT LOUD and BIG amplitude treatment and coordinate care across SLP, OT, and PT.", hours: 5, reviews: 2498, created: '2022-04-06', isNew: false, image: parkinsons },
  { id: 'aac-early-intervention', title: 'AAC: Early Intervention and Transition', fullTitle: 'AAC: Early Intervention and Transition', url: BASE + 'implementation-aac-in-early-intervention-9926', topic: 'aac', taughtWith: ['OT'], outcome: "match device access to young children's abilities and support language growth with AAC.", hours: 3, reviews: 8814, created: '2021-12-15', isNew: false, image: aacEarlyIntervention },
  { id: 'lewy-body-dementia', title: 'Lewy Body Dementia', fullTitle: 'Lewy Body Dementia: The Role of the PT, OT, and SLP in Person-Centered Care', url: BASE + 'lewy-body-dementia-role-pt-10308', topic: 'dementia', taughtWith: ['OT', 'PT'], outcome: "tell Lewy body dementia apart from other dementias, and assess and treat it as a PT, OT, and SLP team.", hours: 4.5, reviews: 3929, created: '2022-09-29', isNew: false, image: lewyBody },
  { id: 'clinical-topics-dysphagia', title: 'Clinical Topics in Dysphagia Management', fullTitle: 'Clinical Topics in Dysphagia Management', url: BASE + 'clinical-topics-in-dysphagia-management-10019', topic: 'dysphagia', taughtWith: [], outcome: "lower aspiration pneumonia risk, weigh thickened liquids, and match swallow exercises to the impairment.", hours: 4, reviews: 4305, created: '2022-03-01', isNew: false, image: clinicalTopicsDysphagia },
  { id: 'cognitive-neurorehabilitation', title: 'Cognitive Evaluation and Intervention in Neurorehabilitation', fullTitle: 'Cognitive Evaluation and Intervention in Neurorehabilitation: Creating Meaningful Collaborations between OTs and SLPs', url: BASE + 'cognitive-evaluation-and-intervention-in-9923', topic: 'neuro', taughtWith: ['OT'], outcome: "evaluate cognition after neurological injury and share the work with OT.", hours: 4, reviews: 3387, created: '2021-10-21', isNew: false, image: cognitiveNeurorehab },
  { id: 'ot-slp-collaboration-children', title: 'OT and SLP Collaboration – Children', fullTitle: 'OT and SLP Collaboration for the School-Aged Child', url: BASE + 'ot-and-slp-collaboration-for-1033787', topic: 'language', taughtWith: ['OT'], outcome: "write functional goals, track progress, and collaborate with OT in medical and school settings.", hours: 4, reviews: 6869, created: '2021-07-19', isNew: false, image: otSlpCollab },
  { id: 'adult-aac-implementation', title: 'Adult AAC Implementation', fullTitle: 'Implementation of AAC in the Adult Population', url: BASE + 'implementation-aac-in-adult-population-1033893', topic: 'aac', taughtWith: ['OT'], outcome: "match device access to clinical needs and explain AAC strategies to adult clients.", hours: 3, reviews: 2642, created: '2024-09-04', isNew: true, image: adultAac },
  { id: 'picu-rehabilitation-trends', title: 'PICU Rehabilitation Trends', fullTitle: 'Current Trends in PICU Rehabilitation', url: BASE + 'current-trends-in-picu-rehabilitation-1033885', topic: 'neuro', taughtWith: ['OT', 'PT'], outcome: "apply ICU Liberation and trauma-informed care, and build AAC into support for critically ill children.", hours: 3, reviews: 1325, created: '2024-02-02', isNew: true, image: picu },
  { id: 'motor-planning', title: 'Motor Planning', fullTitle: 'Motor Planning: The Impact on Communication and Beyond', url: BASE + 'motor-planning-impact-on-communication-10222', topic: 'early-intervention', taughtWith: ['OT'], outcome: "recognize motor planning difficulties, evaluate them with OT, and coach families on strategies that help.", hours: 4, reviews: 10106, created: '2022-08-04', isNew: false, image: motorPlanning },
  { id: 'thinking-about-thinking', title: 'Thinking About Thinking', fullTitle: 'Thinking About Thinking: SLP/OT Collaboration in Assessment and Treatment of Cognition', url: BASE + 'thinking-about-slp-ot-collaboration-10685', topic: 'language', taughtWith: ['OT'], outcome: "assess cognition across care settings, plan treatment with OT, and build patients' self-awareness.", hours: 4, reviews: 6728, created: '2023-10-24', isNew: false, image: thinkingAboutThinking },
  { id: 'aging-in-place', title: 'Aging in Place', fullTitle: 'Aging in Place: It Takes a Team', url: BASE + 'aging-in-place-it-takes-10522', topic: 'dementia', taughtWith: ['OT'], outcome: "reduce fall risk, support nutrition and hydration, and help older adults stay safely at home.", hours: 4, reviews: 5937, created: '2023-06-01', isNew: false, image: agingInPlace },
  { id: 'dirfloortime', title: 'DIRFloortime®, Beyond Autism', fullTitle: 'DIRFloortime®: Beyond Playing on the Floor', url: BASE + 'dirfloortime-174-beyond-playing-on-9642', topic: 'early-intervention', taughtWith: [], outcome: "use the DIR model to guide relationship-based, child-led play, in person or virtually.", hours: 4, reviews: 14016, created: '2021-03-15', isNew: false, image: dirfloortime },
  { id: 'pediatric-dysphagia', title: 'Pediatric Dysphagia Master Class', fullTitle: 'Topics in Pediatric Dysphagia', url: BASE + 'topics-in-pediatric-dysphagia-9624', topic: 'dysphagia', taughtWith: [], outcome: "manage reflux, breathing–swallow coordination, and oral motor challenges so children eat more safely.", hours: 4, reviews: 5762, created: '2021-03-01', isNew: false, image: pediatricDysphagia },
  { id: 'play-is-fundamental', title: 'Play is FUNdamental', fullTitle: 'Play is FUNdamental', url: BASE + 'play-is-fundamental-9391', topic: 'early-intervention', taughtWith: [], outcome: "read play as a window into development and use play stages to guide language goals.", hours: 4, reviews: 13552, created: '2020-09-23', isNew: false, image: playIsFundamental },
  { id: 'polypharmacy-covid-dysphagia', title: 'Polypharmacy & the SLP during COVID-19', fullTitle: 'Polypharmacy & the SLP during the COVID-19 Pandemic', url: BASE + 'polypharmacy-slp-during-covid-19-9430', topic: 'dysphagia', taughtWith: [], taughtByNote: 'Taught by a cognitive neuroscientist', outcome: "recognize how medications and COVID-19 affect swallowing, breathing, and cognition.", hours: 4, reviews: 3265, created: '2020-10-01', isNew: false, image: polypharmacy },
  { id: 'school-teletherapy', title: 'School-Based Teletherapy', fullTitle: 'Teletherapy for the School-Based Therapist', url: BASE + 'teletherapy-for-school-based-therapist-9931', topic: 'language', taughtWith: [], outcome: "plan engaging virtual sessions and partner with teachers and families remotely.", hours: 3, reviews: 0, created: '', isNew: false, image: schoolTeletherapy, placeholder: true },
];

/* ---------- Derived helpers ---------- */

export const ceus = (hours: number) => +(hours / 10).toFixed(2);
export const formatHours = (h: number) => `${h} hr${h === 1 ? '' : 's'}`;
export const formatCeus = (h: number) => `${ceus(h)} CEUs`;
export const taughtByLabel = (c: Course) => c.taughtByNote ?? `Taught by ${['SLP', ...c.taughtWith].join(' + ')}`;
export const formatReviews = (n: number) => `${n.toLocaleString('en-US')} reviews`;

export type CreditBucket = '3' | '4' | '5';
export const creditBucket = (h: number): CreditBucket => (h < 4 ? '3' : h < 5 ? '4' : '5');
export const CREDIT_LABELS: Record<CreditBucket, string> = { '3': '3 hrs', '4': '4–4.5 hrs', '5': '5 hrs' };
export const DISCIPLINE_LABELS: Record<Discipline, string> = { OT: 'Occupational therapist', PT: 'Physical therapist' };

export interface Filters {
  topic: Topic[];
  credit: CreditBucket[];
  taughtWith: Discipline[];
}
export const EMPTY_FILTERS: Filters = { topic: [], credit: [], taughtWith: [] };

/** OR within a group, AND across groups. */
export function matches(c: Course, f: Filters) {
  return (
    (f.topic.length === 0 || f.topic.includes(c.topic)) &&
    (f.credit.length === 0 || f.credit.includes(creditBucket(c.hours))) &&
    (f.taughtWith.length === 0 || f.taughtWith.some((d) => c.taughtWith.includes(d)))
  );
}

export interface FilterOption<V extends string> { value: V; label: string; count: number }

export const filterGroups = {
  topic: (Object.keys(TOPIC_LABELS) as Topic[]).map((value) => ({ value, label: TOPIC_LABELS[value], count: courses.filter((c) => c.topic === value).length })),
  credit: (Object.keys(CREDIT_LABELS) as CreditBucket[]).map((value) => ({ value, label: CREDIT_LABELS[value], count: courses.filter((c) => creditBucket(c.hours) === value).length })),
  taughtWith: (Object.keys(DISCIPLINE_LABELS) as Discipline[]).map((value) => ({ value, label: DISCIPLINE_LABELS[value], count: courses.filter((c) => c.taughtWith.includes(value)).length })),
};
