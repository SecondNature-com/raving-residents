// Mock data service - would be replaced with actual API calls in production

import { InfoCard } from '../components/info-cards-carousel';
import {
  Branding,
  fetchBranding,
  fetchUserProfile,
  fetchUserServices,
} from './api';

import { Service, ServiceCode } from './api';

export type { Service, ServiceCode };

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  availableServices: Service[];
  branding: Branding;
}

export interface InstallDate {
  date: Date | undefined;
  times: string[];
}

export async function getUserData(userId: string): Promise<UserData> {
  // Make API calls in parallel for better performance
  const [userProfile, userServices, branding] = await Promise.all([
    fetchUserProfile(userId),
    fetchUserServices(userId),
    fetchBranding(userId),
  ]);

  // Combine the results into the UserData interface
  return {
    ...userProfile,
    availableServices: userServices.services,
    branding,
  };
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
