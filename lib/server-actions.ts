'use server';

import { cookies } from 'next/headers';
import { USER_ID_COOKIE } from './session';

export async function setUserIdCookie(userId: string) {
	const cookieStore = await cookies();
	cookieStore.set(USER_ID_COOKIE, userId, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: 30 * 24 * 60 * 60, // 30 days
	});
}
