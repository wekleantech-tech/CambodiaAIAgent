
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 bg-base-200 border-b border-base-300 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <h1 className="text-xl font-semibold text-text-primary">AI Agent Control Panel</h1>
        </div>
        <div className="flex items-center space-x-4">
            <div className="relative">
                <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100" alt="User Avatar" />
                 <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
