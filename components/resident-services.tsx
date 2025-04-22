"use client"

import Link from "next/link"

interface Service {
  id: string
  name: string
  link: string
}

interface ResidentServicesProps {
  services: Service[]
}

export function ResidentServices({ services }: ResidentServicesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Resident services</h2>
      <p className="text-[#64748B] mb-6 text-base">
        Discover all your benefits by simply being a Invitation Homes resident.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.link}
            className="border border-[#CBD5E1] rounded-lg p-4 hover:bg-[#F8FAFC] transition-colors"
          >
            <span className="text-[#0F172A] font-medium">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
