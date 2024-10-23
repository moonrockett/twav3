import { ReactNode } from 'react';
import { cn } from '../utils';

interface CardProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Card({ title, children, onClick, className }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
        "transition-all duration-200 ease-in-out",
        "hover:transform hover:-translate-y-1 hover:shadow-xl",
        onClick && "cursor-pointer",
        className
      )}
    >
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}