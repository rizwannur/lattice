'use client';

import { IconHeartHandshake } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

type SiteLogoProps = {
  size?: 'default' | 'sm';
  variant?: 'default' | 'sidebar';
  className?: string;
  iconClassName?: string;
};

const sizeClasses = {
  default: 'h-11 w-11',
  sm: 'h-9 w-9',
};

const variantClasses = {
  default: 'rounded-xl bg-primary text-primary-foreground',
  sidebar: 'rounded-lg bg-sidebar-primary text-sidebar-primary-foreground',
};

const iconSizes = {
  default: 22,
  sm: 18,
};

export function SiteLogo({ size = 'default', variant = 'default', className, iconClassName }: SiteLogoProps) {
  const textClass = variant === 'sidebar' ? 'text-sidebar-primary-foreground' : 'text-primary-foreground';
  return (
    <div
      className={cn(
        'flex items-center justify-center shrink-0',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <IconHeartHandshake className={cn(textClass, iconClassName)} size={iconSizes[size]} stroke={2} />
    </div>
  );
}
