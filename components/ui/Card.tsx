
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-base-200 border border-base-300 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
