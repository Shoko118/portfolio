import { cn } from '@/lib';
import React from 'react';

// Define prop types for Card
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={cn('rounded-lg border shadow-sm', className)} {...props}>
    {children}
  </div>
);

// Define prop types for CardHeader
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> & {
  Title: React.FC<CardHeaderTitleProps>;
  Description: React.FC<CardHeaderDescriptionProps>;
} = ({ children, className, ...props }) => (
  <div className={cn(`flex flex-col space-y-3 p-6`, className)} {...props}>
    {children}
  </div>
);

// Define prop types for CardContent
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => (
  <div className={cn(`p-6 pt-0`, className)} {...props}>
    {children}
  </div>
);

// Define prop types for CardFooter
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => (
  <div className={cn(`flex items-center p-6 pt-0`, className)} {...props}>
    {children}
  </div>
);

// Define prop types for CardHeader.Title
interface CardHeaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

CardHeader.Title = ({ children, className, ...props }) => (
  <div className={cn(`text-[1.5rem] font-semibold leading-none tracking-tight`, className)} {...props}>
    {children}
  </div>
);

// Define prop types for CardHeader.Description
interface CardHeaderDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

CardHeader.Description = ({ children, className, ...props }) => (
  <p className={cn(`text-dark-grey text-sm`, className)} {...props}>
    {children}
  </p>
);

export { Card, CardHeader, CardContent, CardFooter };
