import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InsuranceServicePage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center">
      {/* Header with back button and logo */}
      <header className="w-full border-b border-primary py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text mr-4 hover:cursor-pointer">
            <span className="text-lg">‹</span>
            <span className="ml-1">Back</span>
          </Link>
          <Image
            src="/images/invitation-homes-logo.svg"
            alt="Invitation Homes"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[375px] mx-auto flex flex-col items-center pt-[58px] pb-10 px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-[98px] h-[98px] p-[19.83px] bg-[rgba(57,110,31,0.10)] rounded-[51px] flex justify-center items-center gap-[14.17px]">
            {/* Insurance SVG Icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48 8H16C13.7909 8 12 9.79086 12 12V52C12 54.2091 13.7909 56 16 56H48C50.2091 56 52 54.2091 52 52V12C52 9.79086 50.2091 8 48 8Z" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 20H40" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 32H40" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 44H32" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 8V4" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 8V4" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M44 8V4" stroke="#396E1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-[327px] flex flex-col items-start gap-2">
            <div className="text-[#396E1F] text-[14px] font-semibold uppercase leading-[14px] tracking-[0.28px] font-poppins">Renter insurance program</div>
            <div className="text-[#090949] text-[28px] font-semibold leading-[36.4px] font-poppins">You’re covered!</div>
            <div className="text-[#5C5C75] text-base font-normal leading-6 font-poppins">Our policy covers your home and your belongings in case of damage.</div>
          </div>
        </div>
        <div className="w-full h-px my-6 bg-[#E8E8F1]" />

        {/* Policy Basics Card */}
        <div className="w-[327px] bg-[#F7F7FB] rounded-[24px] flex flex-col gap-6 p-5 mb-6">
          <div className="flex flex-col gap-2">
            <div className="text-[#090949] text-xl font-semibold leading-[26px] font-poppins">Policy basics</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#090949] text-lg font-semibold leading-[20.8px] font-poppins">Insurance details</div>
            <div>
              <span className="text-[#090949] text-xs font-semibold leading-[18px] font-poppins">Policy #:</span>
              <span className="text-[#090949] text-sm font-normal leading-[21px] font-poppins"> CS1037-A-GEN<br/></span>
              <span className="text-[#090949] text-sm font-semibold leading-[21px] font-poppins">Insured:</span>
              <span className="text-[#090949] text-sm font-normal leading-[21px] font-poppins"> Christopher Johnson</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#090949] text-lg font-semibold leading-[20.8px] font-poppins">Coverage amounts</div>
            <div>
              <span className="text-[#090949] text-sm font-semibold leading-[21px] font-poppins">Property:</span>
              <span className="text-[#090949] text-sm font-normal leading-[21px] font-poppins"> $100,000<br/></span>
              <span className="text-[#090949] text-sm font-semibold leading-[21px] font-poppins">Belongings:</span>
              <span className="text-[#090949] text-sm font-normal leading-[21px] font-poppins"> $10,000<br/></span>
              <span className="text-[#090949] text-sm font-semibold leading-[21px] font-poppins">Deductible:</span>
              <span className="text-[#090949] text-sm font-normal leading-[21px] font-poppins"> $0</span>
            </div>
          </div>
          <a
            href="https://view-su2.highspot.com/viewer/e468e4ba545f1757735381d9f23a4975#1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 min-w-[120px] px-6 py-3 bg-white border border-[#396E1F] rounded-xl flex justify-center items-center gap-2 font-semibold text-[#090949] text-base hover:bg-[#f1f6f2] transition"
          >
            Download master policy
            <span className="w-6 h-6 flex items-center justify-center">
              {/* Download SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#D9D9D9"/>
                <path d="M12 7v6m0 0l-2.5-2.5M12 13l2.5-2.5" stroke="#396E1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17h10" stroke="#396E1F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Decline Insurance Section */}
        <div className="w-[327px] bg-white border border-[#E8E8F1] rounded-[24px] flex flex-col gap-4 p-5 mb-6 shadow-sm">
          <div className="text-[#090949] text-lg font-semibold leading-6 font-poppins">Want to bring your own insurance?</div>
          <div className="text-[#5C5C75] text-base font-normal leading-6 font-poppins">
            If you prefer to use your own renters insurance policy, you can decline our standard coverage and submit your policy for approval. Make sure your policy meets all lease requirements.
          </div>
          <Link
            href="/insurance/decline"
            className="w-full h-12 min-w-[120px] px-6 py-3 mt-2 bg-[#396E1F] hover:bg-[#2c5518] rounded-xl flex justify-center items-center font-semibold text-white text-base transition"
          >
            Decline Standard Policy
          </Link>
        </div>

        {/* FAQ & Claims Section */}
        <div className="w-[327px] flex flex-col gap-6 mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[#090949] text-xl font-semibold leading-[26px] font-poppins">Have questions?</div>
            <div className="text-[#5C5C75] text-base font-normal leading-6 font-poppins">Our <Link
              href="https://secondnaturebrands.my.site.com/residenthelp/s/"
              className="text-[#090949] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resident Help Center
            </Link> has answers to common questions.</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-[#090949] text-xl font-semibold leading-[26px] font-poppins">Need to submit a claim?</div>
            <div className="text-[#5C5C75] text-base font-normal leading-6 font-poppins">You can submit your claim through the form at <Link
              href="https://getcovered.my.site.com/forms/s/claim-submission"
              className="text-[#090949] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GetCovered portal
            </Link></div>
          </div>
        </div>

        {/* Powered by Section */}
        <div className="w-[330px] flex flex-col items-center gap-4 pb-10">
          <div className="flex justify-center items-center gap-1">
            <span className="text-[#5C5C75] text-[10px] font-normal leading-[15px] font-poppins">Powered by </span>
            <span className="text-[#5C5C75] text-[10px] font-semibold leading-[15px] font-poppins">Second Nature</span>
          </div>
        </div>
      </main>
    </div>
  );
}
