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
      '--color-secondary',
      secondaryBrandingColor
    );
  }, [primaryBrandingColor, secondaryBrandingColor]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
