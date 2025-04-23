'use server';

import { cookies } from 'next/headers';
import { USER_ID_COOKIE, BRANDING_COOKIE_NAME } from './constants';
import { Branding } from './second-nature-types';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function setUserIdCookie(userId: string) {
	const cookieStore = await cookies();
	cookieStore.set(USER_ID_COOKIE, userId, {
		httpOnly: false,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: COOKIE_MAX_AGE,
	});
}

export async function setBrandingCookie(branding: Branding) {
	const cookieStore = await cookies();
	cookieStore.set({
		name: BRANDING_COOKIE_NAME,
		value: JSON.stringify(branding),
		httpOnly: false,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		maxAge: COOKIE_MAX_AGE,
		sameSite: 'lax',
	});
}
