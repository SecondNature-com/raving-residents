import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeclineInsuranceView from '@/components/services/insurance/decline-insurance-view';

export default function DeclineInsurancePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with logo and back button, matching other service pages */}
      <header className="border-b border-primary py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/insurance" className="flex items-center text mr-4 hover:cursor-pointer">
            <span className="text-lg">‹</span>
            <span className="ml-1">Back</span>
          </Link>
          <Image
            src="/images/invitation-homes-logo.svg"
            alt="Invitation Homes"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-12">
        <DeclineInsuranceView />
      </main>
    </div>
  );
}
