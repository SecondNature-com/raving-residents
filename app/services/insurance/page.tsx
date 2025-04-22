import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function InsurancePage() {
  return (
    <div className="w-full max-w-[375px] mx-auto bg-white overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-4">
          {/* Top Navigation Bar */}
          <div className="w-full h-20 px-6 py-4 bg-white border-b border-[#F2F2F8] flex justify-between items-center">
            <div className="flex-1 flex justify-between items-center">
              <Image 
                src="https://placehold.co/178x40" 
                alt="Logo" 
                width={178} 
                height={40}
                className="max-w-[180px]"
              />
              <div className="w-8 h-8 relative bg-[#D9D9D9]">
                <div className="w-[22.67px] h-[15.03px] absolute left-[4.67px] top-[8.49px] bg-[#090949]"></div>
              </div>
            </div>
          </div>

          {/* Monthly Total Bar */}
          <div className="w-full h-16 py-4 border-t border-b border-[#E8E8F1] flex justify-center items-center gap-3">
            <div>
              <span className="text-[#090949] text-xl font-normal leading-[26px]">Monthly total:</span>
              <span className="text-[#090949] text-xl font-semibold leading-[26px]"> $2,740</span>
            </div>
            <div className="w-8 h-8 relative rotate-90 origin-top-left">
              <div className="w-8 h-8 absolute left-0 top-0 bg-[#D9D9D9]"></div>
              <div className="w-[14.25px] h-[8.03px] absolute left-[8.88px] top-[11.54px] bg-[#396E1F]"></div>
            </div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full px-6 flex flex-col items-center gap-8">
          <div className="w-full h-[23px] flex items-start gap-1">
            <div className="w-10 h-2 bg-[#396E1F] rounded-[10px]"></div>
            <div className="flex-1 relative flex flex-col items-start gap-1">
              <div className="w-[239px] h-2 bg-[#BCBCCC] rounded-[10px]"></div>
              <div className="w-[239px] h-2 bg-[#E8E8F1] rounded-[10px]"></div>
              <div className="w-[47.80px] h-2 bg-[#396E1F]"></div>
              <div className="absolute left-0.5 top-3 text-right text-[#707088] text-[11px] font-semibold uppercase leading-[11px]">
                Resident services
              </div>
            </div>
            <div className="w-10 h-2 bg-[#E8E8F1] rounded-[10px]"></div>
          </div>

          {/* Insurance Hero Section */}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {/* Insurance Icon */}
              <div className="w-24 h-24 p-5 bg-[rgba(57,110,31,0.10)] rounded-[51px] flex justify-center items-center">
                <div className="w-16 h-16 relative">
                  <div className="w-[41.33px] h-[52.23px] absolute left-[11px] top-[6px] bg-[#396E1F]"></div>
                </div>
              </div>
              
              {/* Insurance Description */}
              <div className="w-full flex flex-col items-start gap-2">
                <div className="w-full flex flex-col items-start gap-2">
                  <div className="w-full text-[#396E1F] text-sm font-semibold uppercase leading-[14px] tracking-[0.28px]">
                    INSURANCE
                  </div>
                  <h1 className="w-full text-[#090949] text-[28px] font-semibold leading-[36.4px]">
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

        {/* Divider */}
        <div className="w-full h-px border-t border-[#E8E8F1]"></div>

        {/* Insurance Options Section */}
        <div className="w-full px-6 flex flex-col items-start gap-8">
          <div className="w-full flex flex-col items-start gap-6">
            <h2 className="w-full text-[#090949] text-xl font-semibold leading-[26px]">
              Your insurance
            </h2>
            
            {/* Insurance Options */}
            <div className="w-full flex flex-col justify-center items-center gap-4">
              {/* Standard Policy Option */}
              <div className="w-full py-4 px-3 pr-4 bg-white rounded-2xl border-2 border-[#396E1F] flex items-start gap-4">
                {/* Radio Button */}
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 absolute left-0 top-0 rounded-full border-[1.5px] border-[#396E1F]"></div>
                  <div className="w-[18px] h-[18px] absolute left-[3px] top-[3px] bg-[#396E1F] rounded-full"></div>
                </div>
                
                {/* Policy Details */}
                <div className="flex-1 flex flex-col items-start gap-2">
                  <div className="w-full flex items-start gap-2">
                    <div className="flex-1 flex flex-col justify-center text-[#090949] text-xl font-semibold leading-[26px]">
                      Standard policy
                    </div>
                    <div className="px-3 py-1 bg-[#396E1F] rounded-lg flex items-center gap-2">
                      <div className="text-center text-white text-sm font-semibold leading-[21px]">
                        Most popular
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full flex flex-col justify-center">
                    <span className="text-[#090949] text-base font-normal leading-6">
                      Covers all lease requirements. 
                    </span>
                    <span className="text-[#090949] text-base font-normal underline leading-6">
                      View policy summary here.
                    </span>
                    <br />
                    <span className="text-[#090949] text-xs font-normal leading-[18px]">
                      Offered by Second Nature Insurance Services 
                    </span>
                  </div>
                  
                  <div className="h-8 px-3 py-1 bg-[#090949] rounded-full flex items-center gap-1">
                    <div className="text-white text-sm font-semibold leading-[21px]">
                      Included
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full text-center text-[#5C5C75] text-sm font-normal underline leading-[21px]">
                Bringing your own insurance or prefer customized coverage?
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="w-full pb-10 flex flex-col justify-center items-center gap-4">
            <Button 
              className="w-full h-14 min-w-[120px] px-6 bg-[#396E1F] rounded-xl flex justify-center items-center gap-2 text-white text-base font-semibold leading-6"
            >
              Continue
            </Button>
            
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 flex items-center">
                  <div className="text-center text-[#090949] text-base font-medium leading-6">
                    Back
                  </div>
                </div>
              </div>
              <div className="w-full h-px border-2 border-[#396E1F]"></div>
            </div>
            
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
  );
}
