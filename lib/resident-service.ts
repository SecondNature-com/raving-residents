import { InfoCard } from '../components/info-cards-carousel';
import { config } from './config';
import { SecondNatureAPI } from './second-nature-api';

import { Branding, ServiceType, ServiceCode } from './second-nature-types';

// Create API client (only on server side)
function getApiClient() {
	const { secondNature } = config.server();
	return new SecondNatureAPI(secondNature);
}

export type { ServiceCode };

interface UserData {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	availableServices: ServiceType[];
	companyId: string;
}

export interface InstallDate {
	date: Date | undefined;
	times: string[];
}

export const getUserData = async (userId: string): Promise<UserData> => {
	const client = getApiClient();

	// Make API calls in parallel for better performance
	const [resident, userServicesRaw] = await Promise.all([
		client.fetchResident(userId),
		client.fetchResidentServiceTypes(userId),
	]);

	// Get valid ServiceCode values
	const validCodes: ServiceCode[] = [
		'filters',
		'pest_control',
		'id',
		'move',
		'credit',
		'rewards',
		'insurance',
		'internet',
		'owner_paid_pest',
	];

	// Filter userServices to only include valid codes
	let userServices = userServicesRaw.filter((service) =>
		validCodes.includes(service.code as ServiceCode)
	);

	if (!userServices.find((x) => x.code === 'internet')) {
		// Hack to make sure Internet is always available in the dashboard
		// for demo purposes
		userServices.push({
			id: 'service-7',
			name: 'Internet',
			description: null,
			code: 'internet',
		});
	}

	if (!userServices.find((x) => x.code === 'insurance')) {
		// Hack to make sure Insurance is always available in the dashboard
		// for demo purposes
		userServices.push({
			id: 'service-8',
			name: 'Insurance',
			description: null,
			code: 'insurance',
		});
	}

	// Map the Resident response to our UserData interface
	return {
		id: resident.id,
		firstName: resident.firstName,
		lastName: resident.lastName,
		email: resident.email,
		availableServices: userServices,
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
