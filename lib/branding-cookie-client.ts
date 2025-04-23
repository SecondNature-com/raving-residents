import { Branding } from './second-nature-types';

export function getBrandingFromCookieClient(): Branding | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|; )branding=([^;]*)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as Branding;
  } catch {
    return null;
  }
}
