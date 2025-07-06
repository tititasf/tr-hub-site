'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import type { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  shadow = 'soft',
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };
  
  const shadowStyles = {
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    large: 'shadow-large'
  };
  
  return (
    <div
      className={clsx(
        'card',
        paddingStyles[padding],
        shadowStyles[shadow],
        {
          'card-hover': hover,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

// Specialized card variants
export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}> = ({ icon, title, description, className }) => (
  <Card hover className={clsx('text-center', className)}>
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-primary-100 rounded-full text-primary-600">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-dark-navy">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </Card>
);

export const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  company: string;
  role: string;
  rating: number;
  photo?: string;
  className?: string;
}> = ({ quote, author, company, role, rating, photo, className }) => (
  <Card hover className={className}>
    <div className="flex items-center mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={clsx(
            'w-5 h-5',
            i < rating ? 'text-warning-500' : 'text-neutral-300'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    
    <blockquote className="text-lg text-neutral-700 mb-6">
      &ldquo;{quote}&rdquo;
    </blockquote>
    
    <div className="flex items-center">
      {photo ? (
        <Image
          src={photo}
          alt={author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
        />
      ) : (
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-primary-600 font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
      )}
      <div>
        <div className="font-semibold text-dark-navy">{author}</div>
        <div className="text-sm text-neutral-600">{role}, {company}</div>
      </div>
    </div>
  </Card>
);

export const StatsCard: React.FC<{
  value: string;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}> = ({ value, label, description, trend, trendValue, className }) => (
  <Card className={clsx('text-center', className)}>
    <div className="text-4xl font-bold text-primary-600 mb-2">{value}</div>
    <div className="text-lg font-semibold text-dark-navy mb-1">{label}</div>
    {description && (
      <div className="text-sm text-neutral-600 mb-2">{description}</div>
    )}
    {trend && trendValue && (
      <div className={clsx('text-sm font-medium', {
        'text-success-600': trend === 'up',
        'text-red-600': trend === 'down',
        'text-neutral-600': trend === 'neutral'
      })}>
        {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
      </div>
    )}
  </Card>
);

export const PricingCard: React.FC<{
  tier: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  recommended?: boolean;
  enterprise?: boolean;
  href?: string;
  className?: string;
}> = ({ 
  tier, 
  subtitle, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  popular, 
  recommended, 
  enterprise,
  href,
  className 
}) => (
  <Card 
    hover 
    className={clsx(
      'relative',
      {
        'border-warning-500 border-2': popular,
        'border-success-500 border-2 ring-4 ring-success-100': recommended,
        'border-primary-600 border-2 bg-gradient-to-br from-primary-50 to-indigo-50': enterprise
      },
      className
    )}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-warning-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </span>
      </div>
    )}
    
    {recommended && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-success-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Recomendado
        </span>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-dark-navy mb-2">{tier}</h3>
      <div className="text-lg text-neutral-600 mb-4">{subtitle}</div>
      <div className="text-4xl font-bold text-primary-600 mb-1">{price}</div>
      <div className="text-neutral-600">{period}</div>
      <div className="text-sm text-neutral-500 mt-2">{description}</div>
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-neutral-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    {href ? (
      <Link href={href}>
        <button
          className={clsx(
            'w-full btn-base btn-lg',
            {
              'btn-primary': recommended || popular,
              'btn-outline': !recommended && !popular
            }
          )}
        >
          {cta}
        </button>
      </Link>
    ) : (
    <button
      className={clsx(
        'w-full btn-base btn-lg',
        {
          'btn-primary': recommended || popular,
          'btn-outline': !recommended && !popular
        }
      )}
    >
      {cta}
    </button>
    )}
  </Card>
);

export default Card; 