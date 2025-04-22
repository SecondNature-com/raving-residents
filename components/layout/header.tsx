"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface HeaderProps {
  /**
   * Logo source URL
   */
  logoSrc?: string;
  
  /**
   * Logo alt text
   */
  logoAlt?: string;
  
  /**
   * Whether to show the menu icon
   */
  showMenuIcon?: boolean;
  
  /**
   * Function to call when menu icon is clicked
   */
  onMenuClick?: () => void;
  
  /**
   * Additional CSS classes for the header
   */
  className?: string;
  
  /**
   * Additional CSS classes for the logo
   */
  logoClassName?: string;
}

/**
 * Header component
 * 
 * A reusable header component for use across different pages in the application.
 */
export function Header({
  logoSrc = "/images/second-nature-logo-gradient.svg",
  logoAlt = "Second Nature",
  showMenuIcon = true,
  onMenuClick,
  className,
  logoClassName
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <header className={cn(
      "h-20 px-6 md:px-8 py-4 bg-white border-b border-[#F2F2F8] flex justify-between items-center",
      className
    )}>
      <div className="flex-1 flex justify-between items-center">
        <Link href="/">
          <Image 
            src={logoSrc}
            alt={logoAlt}
            width={178}
            height={40}
            className={cn("max-w-[180px]", logoClassName)}
          />
        </Link>
        
        {showMenuIcon && (
          <Sheet>
            <SheetTrigger asChild>
              <button 
                onClick={handleMenuClick}
                className="w-8 h-8 flex items-center justify-center"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6 text-[#090949]" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <nav className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/insurance" 
                    className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                  >
                    Insurance
                  </Link>
                  <Link 
                    href="/services/air-filter" 
                    className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                  >
                    Air Filter
                  </Link>
                  <Link 
                    href="/services/credit-building" 
                    className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                  >
                    Credit Building
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}

/**
 * MonthlyTotalBar component
 * 
 * A component that displays the monthly total amount.
 */
export interface MonthlyTotalBarProps {
  /**
   * The monthly total amount
   */
  amount: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function MonthlyTotalBar({ 
  amount, 
  className 
}: MonthlyTotalBarProps) {
  return (
    <div className={cn(
      "w-full h-16 py-4 border-t border-b border-[#E8E8F1] flex justify-center items-center gap-3",
      className
    )}>
      <div>
        <span className="text-[#090949] text-xl font-normal leading-[26px]">Monthly total:</span>
        <span className="text-[#090949] text-xl font-semibold leading-[26px]"> {amount}</span>
      </div>
      <div className="w-8 h-8 relative rotate-90 origin-top-left">
        <div className="w-8 h-8 absolute left-0 top-0 bg-[#D9D9D9]"></div>
        <div className="w-[14.25px] h-[8.03px] absolute left-[8.88px] top-[11.54px] bg-[#396E1F]"></div>
      </div>
    </div>
  );
}

/**
 * PageHeader component
 * 
 * A combined component that includes both the Header and MonthlyTotalBar.
 */
export interface PageHeaderProps extends HeaderProps {
  /**
   * The monthly total amount
   */
  monthlyTotal?: string;
  
  /**
   * Whether to show the monthly total bar
   */
  showMonthlyTotal?: boolean;
}

export function PageHeader({
  logoSrc,
  logoAlt,
  showMenuIcon,
  onMenuClick,
  className,
  logoClassName,
  monthlyTotal = "$2,740",
  showMonthlyTotal = true
}: PageHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <Header 
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        showMenuIcon={showMenuIcon}
        onMenuClick={onMenuClick}
        className={className}
        logoClassName={logoClassName}
      />
      
      {showMonthlyTotal && (
        <MonthlyTotalBar amount={monthlyTotal} />
      )}
    </div>
  );
}
