
import React from 'react';
import type { LogEntry } from '../types';
import Card from './ui/Card';
import { CheckCircleIcon, ClockIcon, XCircleIcon } from './Icons';

interface ActivityLogProps {
  logs: LogEntry[];
  isLoading: boolean;
  title?: string;
}

const LogItem: React.FC<{ log: LogEntry }> = ({ log }) => {
  const statusInfo = {
    SUCCESS: { icon: <CheckCircleIcon className="text-green-500" />, color: 'text-green-400' },
    IN_PROGRESS: { icon: <ClockIcon className="text-blue-500 animate-spin" />, color: 'text-blue-400' },
    FAILED: { icon: <XCircleIcon className="text-red-500" />, color: 'text-red-400' },
  };

  return (
    <li className="flex items-start space-x-4 py-3">
      <div className="flex-shrink-0 pt-1">{statusInfo[log.status].icon}</div>
      <div className="flex-1">
        <p className="text-sm text-text-primary">{log.message}</p>
        <p className={`text-xs ${statusInfo[log.status].color}`}>
          {new Date(log.timestamp).toLocaleString()}
        </p>
      </div>
    </li>
  );
};

const ActivityLog: React.FC<ActivityLogProps> = ({ logs, isLoading, title = "Agent Activity Log" }) => {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {isLoading ? (
            <div className="space-y-4 mt-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-base-300 h-6 w-6"></div>
                        <div className="flex-1 space-y-3 py-1">
                            <div className="h-2 bg-base-300 rounded"></div>
                            <div className="h-2 bg-base-300 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
          <ul className="mt-4 divide-y divide-base-300">
            {logs.length > 0 ? (
                logs.map((log) => <LogItem key={log.timestamp + log.message} log={log} />)
            ) : (
                <p className="text-text-secondary text-center py-4">No activities logged yet.</p>
            )}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default ActivityLog;
