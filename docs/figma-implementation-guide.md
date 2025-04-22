# Figma Implementation Guide

This guide explains how to implement designs from your Figma file into the codebase.

## Setup

We've created several tools to help you implement Figma designs:

1. **Figma Tokens** (`/lib/figma-tokens.ts`): A utility for managing design tokens from Figma
2. **Tailwind Config Integration**: Updated the Tailwind config to use these tokens
3. **Figma Wrapper Components** (`/components/ui/figma-wrapper.tsx`): Helper components for implementing Figma designs

## Workflow for Implementing Figma Designs

### Step 1: Extract Design Tokens from Figma

When viewing your Figma design in Dev Mode:

1. Click on any element to see its properties
2. Use the Inspect panel to view exact measurements, colors, and styles
3. Copy these values to use with our helper components

### Step 2: Use the FigmaWrapper Component

The `FigmaWrapper` component allows you to create elements with exact Figma measurements:

```tsx
import { FigmaWrapper } from "@/components/ui/figma-wrapper";

// Example: Creating a card from Figma
<FigmaWrapper
  width="328px"
  padding="16px 24px"
  backgroundColor="#FFFFFF"
  borderRadius="8px"
  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
>
  {/* Card content goes here */}
</FigmaWrapper>
```

### Step 3: Use the FigmaText Component for Typography

The `FigmaText` component helps implement text styles from Figma:

```tsx
import { FigmaText } from "@/components/ui/figma-wrapper";

// Example: Creating text with Figma styles
<FigmaText
  fontSize="16px"
  fontWeight="500"
  lineHeight="24px"
  color="#0F172A"
>
  Hello World
</FigmaText>
```

### Step 4: Leverage Existing UI Components

Your project already has a comprehensive set of UI components in `/components/ui/`. Use these as building blocks and style them according to the Figma design:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Example: Using existing components with Figma styles
<Card className="p-6 rounded-lg bg-white">
  <h2 className="text-xl font-semibold text-secondary-900">Card Title</h2>
  <p className="text-secondary-500">Card description</p>
  <Button className="bg-primary hover:bg-primary-700">Click Me</Button>
</Card>
```

## Tips for Accurate Implementation

1. **Use Dev Mode in Figma**: Always use Dev Mode to get exact measurements
2. **Check for Component Variants**: Look for different states (hover, active, etc.)
3. **Maintain Consistency**: Use design tokens for colors, spacing, etc.
4. **Responsive Considerations**: Check how designs should adapt to different screen sizes
5. **Accessibility**: Ensure proper contrast ratios and semantic HTML

## Example: Implementing a Complete Screen

Here's how to implement a complete screen from your Figma design:

1. Create a new page component in `/app/`
2. Use the FigmaWrapper for layout containers
3. Use existing UI components styled according to the Figma design
4. Use the FigmaText component for typography
5. Test on different screen sizes

```tsx
import { FigmaWrapper, FigmaText } from "@/components/ui/figma-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ExamplePage() {
  return (
    <FigmaWrapper padding="16px 24px" backgroundColor="#F8FAFC">
      <FigmaText as="h1" fontSize="24px" fontWeight="700" color="#0F172A">
        Page Title
      </FigmaText>
      
      <Card className="mt-6 p-4 rounded-lg">
        {/* Card content */}
      </Card>
      
      <Button className="mt-4 w-full bg-primary hover:bg-primary-700">
        Primary Action
      </Button>
    </FigmaWrapper>
  );
}
```
