"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
  className,
  logoClassName
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "h-20 px-6 md:px-8 py-4 bg-white border-b border-[#F2F2F8] flex justify-between items-center relative",
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
          <button 
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#090949]" />
            ) : (
              <Menu className="w-6 h-6 text-[#090949]" />
            )}
          </button>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-full md:w-80 bg-white shadow-lg z-50 border-t border-[#E8E8F1]">
          <div className="py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/insurance" 
                className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Insurance
              </Link>
              <Link 
                href="/services/air-filter" 
                className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Air Filter
              </Link>
              <Link 
                href="/services/credit-building" 
                className="text-lg font-medium text-[#090949] hover:text-[#396E1F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Credit Building
              </Link>
            </nav>
          </div>
        </div>
      )}
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
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
        <path d="M1 1L7 7L13 1" stroke="#396E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
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
        className={className}
        logoClassName={logoClassName}
      />
      
      {showMonthlyTotal && (
        <MonthlyTotalBar amount={monthlyTotal} />
      )}
    </div>
  );
}
