import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

interface InstallTimeProps {
  title: string;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  selectedTimes: string[];
  onTimesChange: (times: string[]) => void;
  timeSlots?: string[];
  minSelectableDate?: Date;
}

// MultiTimeSelect: Custom multi-select dropdown for time slots
const MultiTimeSelect: React.FC<{
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
}> = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((t) => t !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Pills for selected options */}
      <button
        type="button"
        className="w-full flex flex-wrap gap-2 min-h-[56px] items-center rounded-2xl border border-[#B6B6C7] bg-white px-4 py-3 text-lg text-[#1C2251] focus:outline-none focus:ring-2 focus:ring-primary transition"
        onClick={() => setOpen((o) => !o)}
      >
        {selected.length === 0 ? (
          <span className="text-[#9E9EAF]">Choose time</span>
        ) : (
          selected.map((option) => (
            <span
              key={option}
              className="flex items-center bg-[#1C2251] text-white rounded-full px-5 py-2 text-lg font-semibold mr-2 mb-2"
            >
              {option}
            </span>
          ))
        )}
        <ChevronDown
          className={`ml-auto w-6 h-6 text-[#1C2251] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-label={open ? 'Collapse' : 'Expand'}
        />
      </button>
      {/* Dropdown list */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-white border border-[#B6B6C7] shadow-lg z-20 overflow-hidden">
          {options.map((option) => (
            <label
              key={option}
              className={`flex items-center px-5 py-4 cursor-pointer gap-3 text-lg font-semibold transition bg-white hover:bg-[#F4F4FB] ${
                selected.includes(option) ? 'bg-primary' : ''
              }`}
            >
              {/* Custom checkbox */}
              <span
                className={`w-6 h-6 flex items-center justify-center rounded border-2 transition-colors mr-2 ${
                  selected.includes(option)
                    ? 'border-primary bg-primary'
                    : 'border-primary bg-white'
                }`}
              >
                {selected.includes(option) && (
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M4 8l3 3 5-5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              {/* Hidden native checkbox for a11y */}
              <input
                type="checkbox"
                className="hidden"
                checked={selected.includes(option)}
                onChange={() => handleToggle(option)}
                tabIndex={-1}
                aria-hidden="true"
              />
              <span className="flex items-center">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export const InstallTime: React.FC<InstallTimeProps> = ({
  title,
  date,
  onDateChange,
  selectedTimes,
  onTimesChange,
  timeSlots = ['8:30 - 12:30 PM', '12:30 - 4:30 PM'],
  minSelectableDate,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleTimeToggle = (slot: string) => {
    if (selectedTimes.includes(slot)) {
      onTimesChange(selectedTimes.filter((t) => t !== slot));
    } else {
      onTimesChange([...selectedTimes, slot]);
    }
  };

  return (
    <div className="rounded-2xl border border-[#B6B6C7] p-6 w-full bg-white">
      {/* Collapsible header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded((e) => !e)}
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#1C2251]">
            {date ? format(date, 'M/d/yyyy') : title}
          </h2>
          {/* Summary when collapsed */}
          {!expanded && (
            <div className="mt-2 text-[#64748B] font-medium text-base">
              {date ? (
                <>
                  {selectedTimes.length > 0 && (
                    <>
                      <br />
                      {selectedTimes.join(' & ')}
                    </>
                  )}
                </>
              ) : (
                <span className="text-[#9E9EAF]">No date selected</span>
              )}
            </div>
          )}
        </div>
        <span className="ml-2">
          <ChevronDown
            className={`w-6 h-6 text-[#1C2251] transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
            aria-label={expanded ? 'Collapse' : 'Expand'}
          />
        </span>
      </div>
      {/* Details only if expanded */}
      {expanded && (
        <>
          <div className="mt-6">
            <label className="block font-bold text-lg text-[#1C2251] mb-2">
              Choose a date
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center px-5 py-4 rounded-xl border border-[#B6B6C7] bg-white text-lg text-[#9E9EAF] focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setCalendarOpen((o) => !o)}
              >
                <span
                  className={`flex-1 text-left ${date ? 'text-[#1C2251]' : ''}`}
                >
                  {date ? format(date, 'MM/dd/yyyy') : 'mm/dd/yyyy'}
                </span>
                <CalendarIcon className="w-6 h-6 text-primary" />
              </button>
              {calendarOpen && (
                <div className="absolute z-10 mt-2 left-0 w-full bg-white rounded-2xl shadow-lg border border-[#B6B6C7] p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      onDateChange(d);
                      setCalendarOpen(false);
                    }}
                    disabled={
                      minSelectableDate
                        ? (d) => d < minSelectableDate
                        : undefined
                    }
                    fromMonth={minSelectableDate}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label className="block font-bold text-lg text-[#1C2251] mb-2">
              Available time
            </label>
            <MultiTimeSelect
              options={timeSlots}
              selected={selectedTimes}
              onChange={onTimesChange}
            />
          </div>
        </>
      )}
    </div>
  );
};
