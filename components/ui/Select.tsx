
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, id, children, ...props }) => {
  const selectId = id || `select-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <label htmlFor={selectId} className="block text-sm font-medium text-text-secondary mb-1">
        {label}
      </label>
      <select
        id={selectId}
        className="block w-full pl-3 pr-10 py-2 text-base bg-base-300 border-base-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md text-text-primary"
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
