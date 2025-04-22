import React from 'react';
import { cn } from '@/lib/utils';
import { figmaToTailwind } from '@/lib/figma-tokens';

interface FigmaWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Figma width in pixels (e.g., "375px")
   */
  width?: string;
  
  /**
   * Figma height in pixels (e.g., "812px")
   */
  height?: string;
  
  /**
   * Figma padding in pixels (e.g., "16px 24px")
   */
  padding?: string;
  
  /**
   * Figma margin in pixels (e.g., "16px 0")
   */
  margin?: string;
  
  /**
   * Figma border radius in pixels (e.g., "8px")
   */
  borderRadius?: string;
  
  /**
   * Figma background color (e.g., "#FFFFFF")
   */
  backgroundColor?: string;
  
  /**
   * Figma border in pixels (e.g., "1px solid #E2E8F0")
   */
  border?: string;
  
  /**
   * Figma box shadow (e.g., "0px 4px 6px rgba(0, 0, 0, 0.1)")
   */
  boxShadow?: string;
  
  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * FigmaWrapper component
 * 
 * This component helps implement Figma designs by allowing you to specify
 * exact measurements from Figma and converting them to appropriate Tailwind classes.
 * 
 * Example usage:
 * ```tsx
 * <FigmaWrapper
 *   width="375px"
 *   height="812px"
 *   padding="16px 24px"
 *   backgroundColor="#FFFFFF"
 *   borderRadius="8px"
 * >
 *   {/* Your content here */}
 * </FigmaWrapper>
 * ```
 */
export function FigmaWrapper({
  width,
  height,
  padding,
  margin,
  borderRadius,
  backgroundColor,
  border,
  boxShadow,
  className,
  children,
  ...props
}: FigmaWrapperProps) {
  // Convert padding string to Tailwind classes
  const paddingClasses = padding ? 
    padding.split(' ').map((val, index) => {
      const twValue = figmaToTailwind(val);
      return index === 0 ? `py-${twValue}` : `px-${twValue}`;
    }).join(' ') : '';
  
  // Convert margin string to Tailwind classes
  const marginClasses = margin ? 
    margin.split(' ').map((val, index) => {
      const twValue = figmaToTailwind(val);
      return index === 0 ? `my-${twValue}` : `mx-${twValue}`;
    }).join(' ') : '';
  
  // Convert border radius to Tailwind class
  const borderRadiusClass = borderRadius ? 
    `rounded-${figmaToTailwind(borderRadius)}` : '';
  
  // Convert width and height to style object
  const style: React.CSSProperties = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(border ? { border } : {}),
    ...(boxShadow ? { boxShadow } : {})
  };
  
  return (
    <div
      className={cn(
        paddingClasses,
        marginClasses,
        borderRadiusClass,
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * FigmaText component
 * 
 * This component helps implement text styles from Figma designs.
 * 
 * Example usage:
 * ```tsx
 * <FigmaText
 *   fontSize="16px"
 *   fontWeight="500"
 *   lineHeight="24px"
 *   color="#0F172A"
 * >
 *   Hello World
 * </FigmaText>
 * ```
 */
interface FigmaTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Figma font size in pixels (e.g., "16px")
   */
  fontSize?: string;
  
  /**
   * Figma font weight (e.g., "500")
   */
  fontWeight?: string;
  
  /**
   * Figma line height in pixels (e.g., "24px")
   */
  lineHeight?: string;
  
  /**
   * Figma text color (e.g., "#0F172A")
   */
  color?: string;
  
  /**
   * Text alignment (e.g., "center")
   */
  textAlign?: "left" | "center" | "right";
  
  /**
   * HTML element to render (e.g., "h1", "p", "span")
   */
  as?: keyof JSX.IntrinsicElements;
  
  /**
   * Children components
   */
  children: React.ReactNode;
}

export function FigmaText({
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textAlign,
  as: Component = "p",
  className,
  children,
  ...props
}: FigmaTextProps) {
  // Convert font size to Tailwind class
  const fontSizeClass = fontSize ? 
    `text-${figmaToTailwind(fontSize)}` : '';
  
  // Convert font weight to Tailwind class
  const fontWeightMap: Record<string, string> = {
    "100": "font-thin",
    "200": "font-extralight",
    "300": "font-light",
    "400": "font-normal",
    "500": "font-medium",
    "600": "font-semibold",
    "700": "font-bold",
    "800": "font-extrabold",
    "900": "font-black"
  };
  
  const fontWeightClass = fontWeight ? 
    fontWeightMap[fontWeight] || '' : '';
  
  // Convert line height to style object
  const style: React.CSSProperties = {
    ...(lineHeight ? { lineHeight } : {}),
    ...(color ? { color } : {}),
    ...(textAlign ? { textAlign } : {})
  };
  
  return (
    <Component
      className={cn(
        fontSizeClass,
        fontWeightClass,
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
