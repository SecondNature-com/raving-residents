'use client';

import Link from 'next/link';

import { Service, ServiceCode } from '@/lib/data';

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
function getServiceUrl(code: ServiceCode): string | null {
  return serviceUrlMap[code];
}

interface ResidentServicesProps {
  services: Service[];
}

export function ResidentServices({ services }: ResidentServicesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text mb-4">Resident services</h2>
      <p className="text-[#64748B] mb-6 text-base">
        Discover all your benefits by simply being a Invitation Homes resident.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(
          (service: Service) =>
            getServiceUrl(service.code) && (
              <Link
                key={service.id}
                href={getServiceUrl(service.code)!}
                className="border border-primary rounded-lg p-4 hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text font-medium">{service.name}</span>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
