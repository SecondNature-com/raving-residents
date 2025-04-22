import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/header';

/**
 * InsuranceView Component
 * 
 * Displays the insurance service view with policy options and details.
 * Responsive for both mobile and desktop resolutions.
 */
export function InsuranceView() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto flex flex-col items-center gap-6">
        {/* Header Section */}
        <PageHeader 
          logoSrc="/images/second-nature-logo-gradient.svg"
          logoAlt="Second Nature"
          monthlyTotal="$2,740"
        />

        {/* Main Content Container - Responsive Layout */}
        <div className="w-full md:flex md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-12">
          {/* Left Column on Desktop / Top Section on Mobile */}
          <div className="w-full md:w-5/12 lg:w-1/3 px-6 md:px-0 flex flex-col items-center gap-8">
            <Breadcrumb />

            {/* Insurance Hero Section */}
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col justify-center items-center gap-6">
                {/* Insurance Icon */}
                <div className="w-24 h-24 p-5 bg-[rgba(57,110,31,0.10)] rounded-[51px] flex justify-center items-center">
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
                
                {/* Insurance Description */}
                <div className="w-full flex flex-col items-start gap-2">
                  <div className="w-full flex flex-col items-start gap-2">
                    <div className="w-full text-[#396E1F] text-sm font-semibold uppercase leading-[14px] tracking-[0.28px]">
                      INSURANCE
                    </div>
                    <h1 className="w-full text-[#090949] text-[28px] md:text-[32px] font-semibold leading-[36.4px] md:leading-[42px]">
                      Coverage you can count on
                    </h1>
                  </div>
                  <p className="w-full text-[#5C5C75] text-base font-normal leading-6">
                    Your home requires renters insurance for the length of your stay. A standard policy is included and doesn't require a credit check.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider - Only visible on mobile */}
          <div className="w-full h-px border-t border-[#E8E8F1] md:hidden"></div>

          {/* Right Column on Desktop / Bottom Section on Mobile */}
          <div className="w-full md:w-5/12 lg:w-1/3 px-6 md:px-0 flex flex-col items-start gap-8">
            <div className="w-full flex flex-col items-start gap-6">
              <h2 className="w-full text-[#090949] text-xl md:text-2xl font-semibold leading-[26px] md:leading-[32px]">
                Your insurance
              </h2>
              
              {/* Insurance Options */}
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <InsurancePolicyCard 
                  title="Standard policy"
                  description="Covers all lease requirements."
                  summaryLink="#"
                  provider="Offered by Second Nature Insurance Services"
                  badge="Most popular"
                  isSelected={true}
                />
                
                <div className="w-full text-center text-[#5C5C75] text-sm font-normal underline leading-[21px]">
                  <Link href="/insurance/decline" className="hover:text-[#396E1F] transition-colors">
                    Bringing your own insurance or prefer customized coverage?
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="w-full pb-10 flex flex-col justify-center items-center gap-4">
              <Button 
                className="w-full md:max-w-[320px] h-14 min-w-[120px] px-6 bg-[#396E1F] hover:bg-[#2c5518] rounded-xl flex justify-center items-center gap-2 text-white text-base font-semibold leading-6"
              >
                Continue
              </Button>
              
              <Link href="/" className="group">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 flex items-center">
                      <div className="text-center text-[#090949] text-base font-medium leading-6 group-hover:text-[#396E1F] transition-colors">
                        Back
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px border-2 border-[#396E1F]"></div>
                </div>
              </Link>
              
              <div className="w-full text-center flex flex-col justify-center">
                <span className="text-[#5C5C75] text-xs font-normal leading-[18px]">
                  Powered by
                </span>
                <span className="text-[#5C5C75] text-xs font-semibold leading-[18px]">
                  Second Nature
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Breadcrumb Component
 * 
 * Displays the navigation breadcrumb for the current page.
 */
function Breadcrumb() {
  return (
    <div className="w-full py-2 flex items-center">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link 
              href="/" 
              className="text-[#707088] hover:text-[#396E1F] text-sm font-medium transition-colors"
            >
              Resident Services
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-[#707088] mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-[#396E1F] text-sm font-semibold">
                Insurance
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}

/**
 * InsurancePolicyCard Component
 * 
 * Displays an insurance policy option card.
 */
interface InsurancePolicyCardProps {
  title: string;
  description: string;
  summaryLink: string;
  provider: string;
  badge?: string;
  isSelected?: boolean;
}

function InsurancePolicyCard({
  title,
  description,
  summaryLink,
  provider,
  badge,
  isSelected = false
}: InsurancePolicyCardProps) {
  return (
    <div className={`w-full py-4 px-3 pr-4 bg-white rounded-2xl ${isSelected ? 'border-2 border-[#396E1F]' : 'border border-[#E8E8F1]'} flex items-start gap-4 hover:shadow-md transition-shadow`}>
      {/* Radio Button */}
      <div className="w-6 h-6 relative">
        <div className="w-6 h-6 absolute left-0 top-0 rounded-full border-[1.5px] border-[#396E1F]"></div>
        {isSelected && (
          <div className="w-[18px] h-[18px] absolute left-[3px] top-[3px] bg-[#396E1F] rounded-full"></div>
        )}
      </div>
      
      {/* Policy Details */}
      <div className="flex-1 flex flex-col items-start gap-2">
        <div className="w-full flex flex-wrap items-start gap-2">
          <div className="flex-1 flex flex-col justify-center text-[#090949] text-xl font-semibold leading-[26px]">
            {title}
          </div>
          {badge && (
            <div className="px-3 py-1 bg-[#396E1F] rounded-lg flex items-center gap-2">
              <div className="text-center text-white text-sm font-semibold leading-[21px]">
                {badge}
              </div>
            </div>
          )}
        </div>
        
        <div className="w-full flex flex-col justify-center">
          <span className="text-[#090949] text-base font-normal leading-6">
            {description} 
          </span>
          <Link href={summaryLink} className="text-[#090949] text-base font-normal underline leading-6 hover:text-[#396E1F] transition-colors">
            View policy summary here.
          </Link>
          <br />
          <span className="text-[#090949] text-xs font-normal leading-[18px]">
            {provider}
          </span>
        </div>
        
        <div className="h-8 px-3 py-1 bg-[#090949] rounded-full flex items-center gap-1">
          <div className="text-white text-sm font-semibold leading-[21px]">
            Included
          </div>
        </div>
      </div>
    </div>
  );
}
