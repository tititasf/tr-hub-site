'use client';

import React from 'react';
import { clsx } from 'clsx';
import type { ButtonProps } from '@/types';

// Loading spinner component
const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={clsx('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  children,
  onClick,
  className,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'btn-base';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  
  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl'
  };
  
  const isDisabled = disabled || loading;
  
  return (
    <button
      type={type}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        {
          'opacity-50 cursor-not-allowed': isDisabled,
          'transform active:scale-95': !isDisabled,
        },
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <LoadingSpinner className="w-4 h-4 mr-2" />
      )}
      {!loading && icon && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      {children}
    </button>
  );
};

// Specialized button variants for common use cases
export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="secondary" {...props} />
);

export const OutlineButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="outline" {...props} />
);

export const GhostButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="ghost" {...props} />
);

// CTA Button with enhanced styling for hero sections
export const CTAButton: React.FC<ButtonProps & { glow?: boolean }> = ({ 
  glow = false, 
  className,
  ...props 
}) => (
  <Button
    variant="primary"
    size="xl"
    className={clsx(
      'transform transition-all duration-300',
      'hover:scale-105 hover:shadow-2xl',
      {
        'shadow-glow hover:shadow-glow': glow
      },
      className
    )}
    {...props}
  />
);

// Icon Button for minimal interfaces
export const IconButton: React.FC<{
  icon: React.ReactNode;
  'aria-label': string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
  onClick?: () => void;
}> = ({ 
  icon, 
  variant = 'ghost', 
  size = 'md',
  className,
  ...props 
}) => (
  <Button
    variant={variant}
    size={size}
    className={clsx('aspect-square p-0', className)}
    {...props}
  >
    {icon}
  </Button>
);

// Button group for related actions
export const ButtonGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}> = ({ 
  children, 
  className, 
  orientation = 'horizontal' 
}) => (
  <div
    className={clsx(
      'inline-flex',
      {
        'flex-row': orientation === 'horizontal',
        'flex-col': orientation === 'vertical',
      },
      className
    )}
  >
    {React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          className: clsx(
            child.props.className,
            {
              // Horizontal styling
              'rounded-none': orientation === 'horizontal',
              'border-r-0': orientation === 'horizontal' && index !== React.Children.count(children) - 1,
              'first:rounded-l-lg': orientation === 'horizontal',
              'last:rounded-r-lg': orientation === 'horizontal',
              'last:border-r': orientation === 'horizontal',
              
              // Vertical styling
              'rounded-none': orientation === 'vertical',
              'border-b-0': orientation === 'vertical' && index !== React.Children.count(children) - 1,
              'first:rounded-t-lg': orientation === 'vertical',
              'last:rounded-b-lg': orientation === 'vertical',
              'last:border-b': orientation === 'vertical',
            }
          )
        });
      }
      return child;
    })}
  </div>
);

export default Button; 