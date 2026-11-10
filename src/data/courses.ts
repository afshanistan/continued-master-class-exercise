/**
 * The 16 Master Classes shown in the catalog.
 *
 * Titles are the real Master Class names (from the source image set).
 * PLACEHOLDERS to verify before the walkthrough: ratings and review counts,
 * which courses are "New", instructor disciplines, hours, and the outcome
 * sentences for DIRFloortime, Pediatric Dysphagia, Play is FUNdamental,
 * Polypharmacy / COVID-19, and School Teletherapy.
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
  title: string;
  topic: Topic;
  /** Disciplines co-teaching with the SLP. Empty = taught by SLP only. */
  taughtWith: Discipline[];
  /** Sentence that follows "You'll learn to" */
  outcome: string;
  hours: number;
  rating: number;
  reviews: number;
  isNew: boolean;
  image: string;
}

export const courses: Course[] = [
  { id: 'parkinsons-amplitude', title: "An Amplitude-Focused Interprofessional Approach for Parkinson's Disease", topic: 'neuro', taughtWith: ['OT', 'PT'], outcome: 'apply amplitude-based treatment, coordinate care across SLP, OT, and PT, and carry gains into daily routines.', hours: 5, rating: 4.8, reviews: 642, isNew: false, image: parkinsons },
  { id: 'aac-early-intervention', title: 'AAC in Early Intervention', topic: 'aac', taughtWith: ['OT'], outcome: 'introduce AAC to toddlers, model language on devices during play, and coach families to use AAC at home.', hours: 3, rating: 4.7, reviews: 388, isNew: false, image: aacEarlyIntervention },
  { id: 'lewy-body-dementia', title: 'Lewy Body Dementia: An Interprofessional Approach', topic: 'dementia', taughtWith: ['OT'], outcome: 'recognize Lewy body dementia symptoms, plan for fluctuating cognition, and coordinate care with OT.', hours: 4.5, rating: 4.8, reviews: 527, isNew: false, image: lewyBody },
  { id: 'clinical-topics-dysphagia', title: 'Clinical Topics in Dysphagia Management', topic: 'dysphagia', taughtWith: [], outcome: 'assess swallowing safety, choose evidence-based strategies, and plan diet changes with the care team.', hours: 5, rating: 4.8, reviews: 612, isNew: false, image: clinicalTopicsDysphagia },
  { id: 'cognitive-neurorehabilitation', title: 'Cognitive Neurorehabilitation', topic: 'neuro', taughtWith: ['OT'], outcome: 'assess attention and memory after brain injury, set functional goals, and train strategies with OT.', hours: 4, rating: 4.9, reviews: 731, isNew: true, image: cognitiveNeurorehab },
  { id: 'ot-slp-collaboration-children', title: 'OT/SLP Collaboration for Children', topic: 'language', taughtWith: ['OT'], outcome: 'plan shared goals with OT, run co-treatment sessions, and track progress across disciplines.', hours: 4, rating: 4.7, reviews: 295, isNew: false, image: otSlpCollab },
  { id: 'adult-aac-implementation', title: 'Adult AAC Implementation', topic: 'aac', taughtWith: ['OT'], outcome: 'match device access methods to clinical needs, adjust for what affects access success, and explain AAC strategies to adult clients.', hours: 3, rating: 4.6, reviews: 412, isNew: false, image: adultAac },
  { id: 'picu-rehabilitation-trends', title: 'PICU Rehabilitation Trends', topic: 'neuro', taughtWith: ['OT', 'PT'], outcome: 'start rehab safely in the PICU, prevent post-intensive care syndrome, and support families through recovery.', hours: 3, rating: 4.7, reviews: 214, isNew: true, image: picu },
  { id: 'motor-planning', title: 'Motor Planning', topic: 'early-intervention', taughtWith: ['OT'], outcome: 'recognize motor planning difficulties, plan practice that builds them, and coach families to help.', hours: 4, rating: 4.8, reviews: 441, isNew: false, image: motorPlanning },
  { id: 'thinking-about-thinking', title: 'Thinking About Thinking', topic: 'language', taughtWith: ['OT'], outcome: 'teach executive function strategies, build self-monitoring routines, and partner with OT on daily tasks.', hours: 4, rating: 4.8, reviews: 356, isNew: false, image: thinkingAboutThinking },
  { id: 'aging-in-place', title: 'Aging in Place', topic: 'dementia', taughtWith: ['OT', 'PT'], outcome: 'assess home safety, adapt communication and routines, and coordinate care so older adults can stay home.', hours: 4, rating: 4.6, reviews: 289, isNew: false, image: agingInPlace },
  { id: 'dirfloortime', title: 'DIRFloortime', topic: 'early-intervention', taughtWith: ['OT'], outcome: "follow a child's lead in play, build shared attention and back-and-forth interaction, and coach caregivers to do the same.", hours: 4, rating: 4.8, reviews: 318, isNew: true, image: dirfloortime },
  { id: 'pediatric-dysphagia', title: 'Pediatric Dysphagia', topic: 'dysphagia', taughtWith: ['OT'], outcome: 'evaluate feeding and swallowing in infants and children, choose safe textures, and plan family-centered treatment.', hours: 4, rating: 4.7, reviews: 402, isNew: false, image: pediatricDysphagia },
  { id: 'play-is-fundamental', title: 'Play is FUNdamental', topic: 'early-intervention', taughtWith: ['OT'], outcome: 'use play to target communication goals, set up motivating routines, and track progress during play-based sessions.', hours: 3, rating: 4.8, reviews: 266, isNew: false, image: playIsFundamental },
  { id: 'polypharmacy-covid-dysphagia', title: 'Polypharmacy, the SLP, and COVID-19 Dysphagia', topic: 'dysphagia', taughtWith: [], outcome: 'spot medication effects on swallowing and cognition, manage post-COVID dysphagia, and flag concerns to the care team.', hours: 3, rating: 4.6, reviews: 233, isNew: false, image: polypharmacy },
  { id: 'school-teletherapy', title: 'School Teletherapy', topic: 'language', taughtWith: [], outcome: 'plan engaging virtual sessions, keep students participating online, and partner with teachers and families remotely.', hours: 3, rating: 4.7, reviews: 201, isNew: false, image: schoolTeletherapy },
];

/* ---------- Derived helpers ---------- */

export const ceus = (hours: number) => +(hours / 10).toFixed(2);
export const formatHours = (h: number) => `${h} hr${h === 1 ? '' : 's'}`;
export const formatCeus = (h: number) => `${ceus(h)} CEUs`;
export const taughtByLabel = (c: Course) => `Taught by ${['SLP', ...c.taughtWith].join(' + ')}`;

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
