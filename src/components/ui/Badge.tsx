import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'emerald' | 'amber' | 'red';
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  emerald: 'bg-emerald-100 text-emerald-800',
  amber: 'bg-amber-100 text-amber-800',
  red: 'bg-red-100 text-red-800'
};

export function Badge({ children, color = 'blue' }: BadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
}