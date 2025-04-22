'use client';

import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

interface CustomThemeProviderProps extends ThemeProviderProps {
  primaryBrandingColor?: string;
  secondaryBrandingColor?: string;
}

function hexToRgb(hex: string): string {
  // Remove '#' if present
  hex = hex.replace(/^#/, '');
  // Expand shorthand form (e.g. "03F") to full form ("0033FF")
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('');
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

export function ThemeProvider({
  children,
  primaryBrandingColor = '#16A34A',
  secondaryBrandingColor = '#0F172A',
  ...props
}: Readonly<CustomThemeProviderProps>) {
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-primary',
      primaryBrandingColor
    );
    document.documentElement.style.setProperty(
      '--color-primary-rgb',
      hexToRgb(primaryBrandingColor)
    );
    document.documentElement.style.setProperty(
      '--color-secondary',
      secondaryBrandingColor
    );
    document.documentElement.style.setProperty(
      '--color-secondary-rgb',
      hexToRgb(secondaryBrandingColor)
    );
  }, [primaryBrandingColor, secondaryBrandingColor]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
