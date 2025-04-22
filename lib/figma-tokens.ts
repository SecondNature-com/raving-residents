/**
 * Figma Design Tokens Utility
 * 
 * This utility helps manage design tokens from Figma in your codebase.
 * It provides a structured way to define and access design tokens.
 */

// Color tokens from Figma
export const colors = {
  // Primary colors
  primary: {
    DEFAULT: "#16A34A", // Green - already in your tailwind config
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },
  // Secondary colors
  secondary: {
    DEFAULT: "#0F172A", // Dark blue/slate - already in your tailwind config
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  // Add any additional color tokens from your Figma design
};

// Spacing tokens from Figma
export const spacing = {
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  52: "208px",
  56: "224px",
  60: "240px",
  64: "256px",
  72: "288px",
  80: "320px",
  96: "384px",
};

// Typography tokens from Figma
export const typography = {
  fontFamily: {
    sans: ["var(--font-sans)"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
};

// Border radius tokens from Figma
export const borderRadius = {
  none: "0px",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Shadow tokens from Figma
export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none",
};

/**
 * Helper function to get a design token value
 * @param tokenType The type of token (colors, spacing, etc.)
 * @param tokenPath The path to the token value
 * @returns The token value or undefined if not found
 */
export function getToken(
  tokenType: "colors" | "spacing" | "typography" | "borderRadius" | "shadows",
  tokenPath: string
): string | undefined {
  const tokens: Record<string, any> = {
    colors,
    spacing,
    typography,
    borderRadius,
    shadows,
  };

  const parts = tokenPath.split(".");
  let current = tokens[tokenType];

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return current;
}

/**
 * Helper function to convert Figma measurements to Tailwind classes
 * @param measurement The measurement from Figma (e.g., "16px")
 * @returns The corresponding Tailwind class or the original value
 */
export function figmaToTailwind(measurement: string): string {
  // Remove "px" suffix if present
  const value = measurement.endsWith("px")
    ? measurement.slice(0, -2)
    : measurement;
  
  // Convert to number
  const numValue = parseFloat(value);
  
  // Map common pixel values to Tailwind spacing scale
  const pixelToTailwind: Record<number, string> = {
    0: "0",
    1: "px",
    2: "0.5",
    4: "1",
    6: "1.5",
    8: "2",
    10: "2.5",
    12: "3",
    14: "3.5",
    16: "4",
    20: "5",
    24: "6",
    28: "7",
    32: "8",
    36: "9",
    40: "10",
    44: "11",
    48: "12",
    56: "14",
    64: "16",
    80: "20",
    96: "24",
    112: "28",
    128: "32",
    144: "36",
    160: "40",
    176: "44",
    192: "48",
    208: "52",
    224: "56",
    240: "60",
    256: "64",
    288: "72",
    320: "80",
    384: "96",
  };
  
  return pixelToTailwind[numValue] || measurement;
}
