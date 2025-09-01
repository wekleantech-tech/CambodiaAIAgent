
import React from 'react';
import type { Page } from '../types';
import { Page as PageEnum } from '../types';
import { DashboardIcon, SettingsIcon, ActivityIcon, AnalyticsIcon, BrandIcon, WorkflowIcon } from './Icons';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: Page;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-brand-primary text-white'
          : 'text-text-secondary hover:bg-base-300 hover:text-text-primary'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: PageEnum.Dashboard, icon: <DashboardIcon />, label: PageEnum.Dashboard },
    { id: PageEnum.Strategy, icon: <SettingsIcon />, label: PageEnum.Strategy },
    { id: PageEnum.Workflow, icon: <WorkflowIcon />, label: PageEnum.Workflow },
    { id: PageEnum.Monitoring, icon: <AnalyticsIcon />, label: PageEnum.Monitoring },
    { id: PageEnum.Logs, icon: <ActivityIcon />, label: PageEnum.Logs },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-base-200 border-r border-base-300 flex flex-col">
      <div className="h-16 flex items-center justify-center px-4 border-b border-base-300">
        <div className="flex items-center space-x-2">
            <BrandIcon />
            <span className="font-bold text-lg text-text-primary whitespace-nowrap">Cambodia AI</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={currentPage === item.id}
            onClick={() => setCurrentPage(item.id)}
          />
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-base-300">
        <div className="p-4 rounded-lg bg-base-300 text-center">
            <h4 className="font-semibold text-text-primary">Need Help?</h4>
            <p className="text-xs text-text-secondary mt-1">Check our documentation or contact support.</p>
            <button className="mt-3 w-full bg-brand-secondary text-white text-sm py-2 px-3 rounded-md hover:bg-brand-primary transition-colors">
                Documentation
            </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;