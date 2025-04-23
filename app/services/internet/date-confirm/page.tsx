import { getUserIdFromSession } from '../../../../lib/session';
import DateConfirmClient from './DateConfirmClient';

export default async function DateConfirmPage() {
  const userId = await getUserIdFromSession();
  return <DateConfirmClient userId={userId} />;
}
