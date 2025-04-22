import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, style, ...props }: BadgeProps) {
  const [hovered, setHovered] = React.useState(false);

  // Only apply the RGBA background for the "default" variant
  const dynamicStyle =
    variant === 'default'
      ? {
          backgroundColor: hovered
            ? 'rgba(var(--color-primary-rgb), 1)' // 100% on hover
            : 'rgba(var(--color-primary-rgb), 0.8)', // 80% default
          ...style,
        }
      : style;

  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={dynamicStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
