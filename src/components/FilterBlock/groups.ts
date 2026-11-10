import { filterGroups, TOPIC_LABELS, CREDIT_LABELS, DISCIPLINE_LABELS, type Filters } from '../../data/courses';

export type GroupKey = keyof Filters;
/** The three filter groups, in display order. */
export const GROUPS: { key: GroupKey; label: string }[] = [
  { key: 'topic', label: 'Clinical area' },
  { key: 'credit', label: 'Credits' },
  { key: 'taughtWith', label: 'Instructors' },
];
export const OPTIONS = filterGroups as Record<GroupKey, { value: string; label: string; count: number }[]>;
export const LABELS: Record<GroupKey, Record<string, string>> = { topic: TOPIC_LABELS, credit: CREDIT_LABELS, taughtWith: DISCIPLINE_LABELS };

/** Return a copy of filters with one group's values replaced. */
export const setGroup = (f: Filters, key: GroupKey, values: string[]) => ({ ...f, [key]: values }) as Filters;
export const toggle = (list: string[], v: string) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
export const totalApplied = (f: Filters) => f.topic.length + f.credit.length + f.taughtWith.length;
