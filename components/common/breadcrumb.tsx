import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb Component
 * 
 * A reusable breadcrumb navigation component that shows the current page hierarchy.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="w-full py-2 flex items-center">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {items.map((item, index) => (
            <li key={index} className={index > 0 ? "flex items-center" : "inline-flex items-center"}>
              {index > 0 && (
                <svg 
                  className="w-3 h-3 text-[#707088] mx-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              {item.current ? (
                <span className="text-[#396E1F] text-sm font-semibold">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-[#707088] hover:text-[#396E1F] text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
