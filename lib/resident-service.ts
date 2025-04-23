import { InfoCard } from '../components/info-cards-carousel';
import { config } from './config';
import { SecondNatureAPI } from './second-nature-api';

// Re-export types from API
import { Service, ServiceCode } from './api';

// For now, also import mock data functions as fallback
import { fetchUserServices as mockFetchUserServices } from './api';
import { Branding } from './second-nature-types';

// Create API client (only on server side)
function getApiClient() {
  const { secondNature } = config.server();
  return new SecondNatureAPI(secondNature);
}

export type { Service, ServiceCode };

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  availableServices: Service[];
  companyId: string;
}

export interface InstallDate {
  date: Date | undefined;
  times: string[];
}

export const getUserData = async (userId: string): Promise<UserData> => {
  const client = getApiClient();

  // Make API calls in parallel for better performance
  const [resident, userServices] = await Promise.all([
    client.fetchResident(userId),
    mockFetchUserServices(userId), // TODO: Replace with real API call
  ]);

  // Map the Resident response to our UserData interface
  return {
    id: resident.id,
    firstName: resident.firstName,
    lastName: resident.lastName,
    email: resident.email,
    availableServices: userServices.services,
    companyId: resident.companyId,
  };
};

export async function getBranding(companyId: string): Promise<Branding> {
  const client = getApiClient();
  return client.fetchBranding(companyId);
}

export async function getInfoCards(): Promise<InfoCard[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock info cards data
  return [
    {
      id: 1,
      title: 'Feel at home from day 1',
      description: "Let's get you set up before your move-in.",
      actionText: 'Set up utilities',
      actionLink: '#',
      imageSrc: '/images/at-home.svg',
      imageAlt: 'At home illustration',
    },
    {
      id: 2,
      title: 'Ready for flu season?',
      description:
        "We've got allergen-grade filters to help you get through the season.",
      actionText: 'See filters',
      actionLink: '#',
      imageSrc: '/images/air-filter.svg',
      imageAlt: 'Air filter illustration',
    },
    {
      id: 3,
      title: 'You just got credit for paying your rent on time',
      description:
        'We report on-time rent payments every 3 months to help boost your credit.',
      actionText: 'See report',
      actionLink: '#',
      imageSrc: '/images/credit-building.svg',
      imageAlt: 'Credit report illustration',
    },
  ];
}
