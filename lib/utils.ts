import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { InstallDate } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sendInstallDates(installDates: InstallDate[]) {
  const res = await fetch('/api/send-install-dates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ installDates }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to send install dates');
  }
  return res.json();
}
