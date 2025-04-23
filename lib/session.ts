import { cookies } from 'next/headers';

const USER_ID_COOKIE = 'userId';
const DEFAULT_USER_ID = '123e4567-e89b-42d3-a456-556642440000';

export async function getUserIdFromSession(): Promise<string> {
	const cookieStore = await cookies();
	return cookieStore.get(USER_ID_COOKIE)?.value || DEFAULT_USER_ID;
}

export { USER_ID_COOKIE };
