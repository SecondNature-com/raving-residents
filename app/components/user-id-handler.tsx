'use client';

import { useEffect } from 'react';
import { setUserIdCookie } from '@/lib/server-actions';

interface UserIdHandlerProps {
	queryUserId: string | undefined;
}

export function UserIdHandler({ queryUserId }: UserIdHandlerProps) {
	useEffect(() => {
		if (queryUserId) {
			setUserIdCookie(queryUserId);
		}
	}, [queryUserId]);

	return null;
}
