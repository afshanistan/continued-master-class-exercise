import { useId } from 'react';
import { ToggleChip } from '../ToggleChip/ToggleChip';
import './ChipGroup.css';

export interface ChipOption { value: string; label: string; count: number }

/** A labelled group of Toggle Chips in the mobile drawer. */
export function ChipGroup({ heading, options, selected, onToggle }: { heading: string; options: ChipOption[]; selected: string[]; onToggle: (value: string) => void }) {
  const id = useId();
  return (
    <div className="c-chip-group" role="group" aria-labelledby={id}>
      <h3 id={id} className="c-chip-group__heading">{heading}</h3>
      <div className="c-chip-group__chips">
        {options.map((o) => (
          <ToggleChip key={o.value} label={o.label} count={o.count} selected={selected.includes(o.value)} onClick={() => onToggle(o.value)} />
        ))}
      </div>
    </div>
  );
}
