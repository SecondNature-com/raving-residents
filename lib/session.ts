import { cookies } from 'next/headers';
import { Branding } from './second-nature-types';
import { USER_ID_COOKIE, BRANDING_COOKIE_NAME } from './constants';

const DEFAULT_USER_ID = '123e4567-e89b-42d3-a456-556642440000';

export async function getUserIdFromSession(): Promise<string> {
	const cookieStore = await cookies();
	return cookieStore.get(USER_ID_COOKIE)?.value || DEFAULT_USER_ID;
}

export async function getBrandingFromCookie(): Promise<Branding | null> {
	const cookieStore = await cookies();
	const value = cookieStore.get(BRANDING_COOKIE_NAME)?.value;
	if (!value) return null;
	try {
		return JSON.parse(value) as Branding;
	} catch {
		return null;
	}
}


