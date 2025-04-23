'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { addDays, startOfDay } from 'date-fns';
import { InstallTime } from '@/components/install-time';
import { Plus } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { sendInstallDates } from '../../../lib/utils';
import { InstallDate } from '../../../lib/data';

export default function InternetService() {
  const router = useRouter();
  const [hasModem, setHasModem] = useState<boolean | null>(null);
  // For up to 3 date/time pairs, each with multiple times
  const [installDates, setInstallDates] = useState<InstallDate[]>([
    { date: undefined, times: [] },
  ]);

  // Disable first 3 weeks from today
  const minSelectableDate = addDays(startOfDay(new Date()), 21);

  const timeSlots = ['8:30 - 12:30 PM', '12:30 - 4:30 PM'];

  const handleDateChange = (idx: number, date: Date | undefined) => {
    setInstallDates((prev) =>
      prev.map((entry, i) => (i === idx ? { ...entry, date } : entry))
    );
  };
  const handleTimesChange = (idx: number, times: string[]) => {
    setInstallDates((prev) =>
      prev.map((entry, i) => (i === idx ? { ...entry, times } : entry))
    );
  };
  const handleAddDate = () => {
    if (installDates.length < 3)
      setInstallDates([...installDates, { date: undefined, times: [] }]);
  };
  const handleRemoveDate = (idx: number) => {
    setInstallDates((prev) => prev.filter((_, i) => i !== idx));
  };
  const canConfirm =
    installDates.length === 3 &&
    installDates.every((d) => d.date && d.times.length > 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with logo and back button */}
      <header className="border-b border-primary py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text mr-4">
            <span className="text-lg">‹</span>
            <span className="ml-1">Back</span>
          </Link>
          <Image
            src="/images/invitation-homes-logo.svg"
            alt="Invitation Homes"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-8 pb-32">
        <div className="flex flex-col items-center mb-6">
          {/* Service icon */}
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/internet-icon.svg"
                alt="Internet"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Service label */}
        <span className="text-primary text-sm font-medium tracking-wider uppercase">
          Internet
        </span>

        {/* Service title */}
        <h1 className="service-title mb-4">Stay connected from day one</h1>

        {/* Service description */}
        <p className="service-description mb-8">
          Set up your internet today to avoid any interruptions once you move
          in.
        </p>

        {/* Question section */}
        <div className="space-y-4 w-full">
          <h2 className="text text-xl font-semibold">
            Did your home come equipped with a modem or router?
          </h2>

          <div className="space-y-3">
            <button
              onClick={() => setHasModem(true)}
              className={`w-full p-4 rounded-lg border text-left transition-colors ${
                hasModem === true
                  ? 'border-primary'
                  : 'border-[#E2E8F0] hover:bg-[#F8FAFC]'
              }`}
              style={
                hasModem === true
                  ? { backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)' }
                  : undefined
              }
            >
              Yes
            </button>
            <button
              onClick={() => setHasModem(false)}
              className={`w-full p-4 rounded-lg border text-left transition-colors ${
                hasModem === false
                  ? 'border-primary'
                  : 'border-[#E2E8F0] hover:bg-[#F8FAFC]'
              }`}
              style={
                hasModem === false
                  ? { backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)' }
                  : undefined
              }
            >
              No
            </button>
          </div>

          {/* Installation date selection UI if No is selected */}
          {hasModem === false && (
            <div className="w-full space-y-4 mb-4 pb-4">
              <h3 className="font-semibold text-lg mb-2">
                When are you available for installation?
              </h3>
              <p className="text-sm text-[#64748B] mb-4">
                Choose at least 3 dates that work for you, and we'll coordinate
                with the provider to confirm the best time.
              </p>
              <div className="space-y-6">
                {installDates.map((entry, idx) => (
                  <div key={idx} className="relative">
                    <InstallTime
                      title={`Date ${idx + 1}`}
                      date={entry.date}
                      onDateChange={(date) => handleDateChange(idx, date)}
                      selectedTimes={entry.times}
                      onTimesChange={(times) => handleTimesChange(idx, times)}
                      timeSlots={timeSlots}
                      minSelectableDate={minSelectableDate}
                    />
                  </div>
                ))}
                <div className="mt-6 flex flex-col items-center gap-4">
                  <button
                    type="button"
                    className="flex flex-col items-center focus:outline-none disabled:opacity-50 mb-4"
                    onClick={handleAddDate}
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="w-6 h-6 text-primary" strokeWidth={2} />
                      <span className="text-2xl font-bold text-[#1C2251]">
                        Add date
                      </span>
                    </span>
                    <span className="block w-full h-0.5 bg-primary mt-1 rounded"></span>
                  </button>
                </div>
                <button
                  type="button"
                  className="px-8 py-4 rounded-lg bg-primary text-white font-semibold w-full disabled:opacity-50"
                  disabled={!canConfirm}
                  onClick={() => {
                    if (canConfirm) {
                      sendInstallDates(installDates);
                      router.push('/services/internet/date-confirm');
                    }
                  }}
                >
                  Confirm dates
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-primary bg-white py-4 px-6">
        <div className="max-w-xl mx-auto text-center text-sm text-[#64748B]">
          Powered by Second Nature
        </div>
      </footer>
    </div>
  );
}
