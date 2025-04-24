'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { Branding, ServiceType, ServiceCode } from '../lib/second-nature-types';

// Map service codes to their corresponding URLs
const serviceUrlMap: Record<ServiceCode, string | null> = {
	filters: '/services/air-filter',
	pest_control: '/services/pest-control',
	id: '/services/identity-protection',
	move: null, // ignored
	credit: '/services/credit-building',
	rewards: '/services/resident-rewards',
	insurance: '/services/insurance',
	internet: '/services/internet',
	owner_paid_pest: '/services/pest-control',
};

// Helper function to get service URL from code
function getServiceUrl(code: string): string | null {
	return serviceUrlMap[code as ServiceCode];
}

interface ResidentServicesProps {
	services: ServiceType[];
	branding: Branding;
}
export interface InstallDate {
	date: Date | undefined;
	times: string[];
}

enum serviceDesctiption {
	filters = 'Provide your air filter’s measurements before your next ship date',
	credit = 'Credit building',
	insurance = 'Review your renters insurance policy information.',
	internet = 'Schedule your installation.',
	pest_control = 'Review your pest control benefits.',
	rewards = 'Review your rewards for paying rent on time.',
}

export function ResidentServices({
	services,
	branding,
}: ResidentServicesProps) {
	return (
		<div className="mb-12">
			<h2 className="text-2xl font-bold text mb-4">Resident services</h2>
			<p className="text-[#64748B] mb-6 text-base">
				Discover all your benefits by simply being a {branding.name}{' '}
				resident.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{services.map(
					(service: ServiceType) =>
						getServiceUrl(service.code) && (
							<Link
								key={service.id}
								href={getServiceUrl(service.code)!}
								className="border border-primary rounded-lg p-4 hover:bg-[#F8FAFC] transition-colors flex justify-between items-center"
							>
								<div>
									<span className="text font-medium">
										{service.name}
									</span>
									{serviceDesctiption[
										service.code as keyof typeof serviceDesctiption
									] && (
										<p className="text-[#64748B] mb-2 text-base">
											{
												serviceDesctiption[
													service.code as keyof typeof serviceDesctiption
												]
											}
										</p>
									)}
								</div>
								<ChevronRight
									className="h-5 w-5 text-primary ml-2 flex-shrink-0"
									aria-hidden="true"
								/>
							</Link>
						)
				)}
			</div>
		</div>
	);
}
