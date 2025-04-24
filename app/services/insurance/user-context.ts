import { useEffect, useState } from 'react';
import { getUserData, getUserIdFromSession } from '@/lib/resident-service';

export function useUserName() {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    async function fetchName() {
      // Try to get userId from session or query param
      let userId = await getUserIdFromSession();
      const userData = await getUserData(userId);
      setName(`${userData.firstName} ${userData.lastName}`);
    }
    fetchName();
  }, []);

  return name;
}
