
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const DashboardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></IconWrapper>
);
export const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>
);
export const ActivityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><polyline points="22 12 12 12 12 2 12 12 2 12"></polyline><path d="M22 12H2"></path></IconWrapper>
);
export const AnalyticsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20V14"></path></IconWrapper>
);
export const BrandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={`${className} text-brand-primary`}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></IconWrapper>
);
export const DollarSignIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></IconWrapper>
);
export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></IconWrapper>
);
export const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>
);
export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></IconWrapper>
);
export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></IconWrapper>
);
export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></IconWrapper>
);
export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M3 11v2a2 2 0 0 0 2 2h2l8 5V4l-8 5H5a2 2 0 0 0-2 2z"></path><line x1="18" y1="8" x2="18" y2="16"></line></IconWrapper>
);
export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></IconWrapper>
);
export const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></IconWrapper>
);
export const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.66 4 3 10 0v-5"></path></IconWrapper>
);
export const StatusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></IconWrapper>
);
export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></IconWrapper>
);
export const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></IconWrapper>
);
export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M9 18h6v-2.42c0-.98.5-1.89 1.34-2.45L18 12V9c0-3.31-2.69-6-6-6s-6 2.69-6 6v3l1.66 1.13c.84.56 1.34 1.47 1.34 2.45V18z"></path><path d="M10 22h4"></path></IconWrapper>
);
export const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>
);
export const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}><path d="M4.5 16.5c-1.5 1.5-3 1.5-4.5 0s-1.5-3 0-4.5L12 0l12 12-19.5 4.5zM16.5 4.5c1.5-1.5 3-1.5 4.5 0s1.5 3 0 4.5L9 21l-4.5-4.5 12-12z"></path></IconWrapper>
);
export const WorkflowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}><circle cx="12" cy="12" r="2"></circle><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.6.11.82-.26.82-.57v-2.05c-2.78.6-3.37-1.34-3.37-1.34-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .31.22.69.82.57A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path></IconWrapper>
);