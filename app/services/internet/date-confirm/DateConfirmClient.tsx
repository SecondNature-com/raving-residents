'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DateConfirmClient({ userId }: { userId: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with logo */}
      <header className="flex flex-col items-center pt-6 pb-2 border-b border-[#F1F5F9]">
        <Image
          src="/logo-invitation-homes.png"
          alt="Invitation Homes"
          width={160}
          height={40}
        />
      </header>
      {/* Confetti and calendar/check icon */}
      <div className="flex flex-col items-center px-6 py-8 flex-1">
        {/* Confetti SVG or placeholder */}
        <div className="mb-6">
          <svg
            width="220"
            height="48"
            viewBox="0 0 220 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="4" fill="#FBBF24" />
            <circle cx="60" cy="20" r="3" fill="#A78BFA" />
            <circle cx="120" cy="8" r="2" fill="#F87171" />
            <circle cx="180" cy="15" r="5" fill="#34D399" />
            <circle cx="200" cy="35" r="4" fill="#38BDF8" />
          </svg>
        </div>
        {/* Calendar with check SVG */}
        <div className="mb-8">
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="18"
              y="28"
              width="84"
              height="54"
              rx="12"
              fill="#34D399"
              fillOpacity="0.1"
            />
            <rect x="26" y="36" width="68" height="38" rx="6" fill="#fff" />
            <rect
              x="26"
              y="36"
              width="68"
              height="38"
              rx="6"
              stroke="#34D399"
              strokeWidth="2"
            />
            <circle cx="60" cy="55" r="3" fill="#A78BFA" />
            <circle cx="75" cy="55" r="3" fill="#FBBF24" />
            <circle cx="45" cy="55" r="3" fill="#F87171" />
            <circle cx="60" cy="68" r="3" fill="#38BDF8" />
            <circle cx="92" cy="76" r="14" fill="#34D399" />
            <path
              d="M86 76l5 5 9-9"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Headline */}
        <h1 className="text-2xl font-extrabold text-center text-[#1C2251] mb-4">
          We got your dates!
        </h1>
        {/* Subtext */}
        <p className="text-center text-[#64748B] text-base mb-10 max-w-xs">
          We’ll work with the internet provider to schedule installation and
          we’ll contact you once the date is confirmed.
        </p>
        {/* Button */}
        <Link
          href={`/?userId=${userId}`}
          className="w-full max-w-xs bg-primary text-white rounded-lg py-4 font-bold text-lg mt-4 mb-10 shadow-sm transition block text-center"
        >
          Back to resident services
        </Link>
      </div>
      {/* Footer */}
      <footer className="text-center text-xs text-[#64748B] pb-6">
        Powered by{' '}
        <span className="font-bold text-[#1C2251]">Second Nature</span>
      </footer>
    </div>
  );
}
