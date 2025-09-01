
import React from 'react';
import type { Metrics, AgentConfig, WorkflowStep } from '../types';
import { AgentStatus } from '../types';
import { DollarSignIcon, UsersIcon, TargetIcon, StatusIcon } from './Icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from './ui/Card';
import AgentWorkflow from './AgentWorkflow';

interface DashboardProps {
  metrics: Metrics;
  agentStatus: AgentStatus;
  agentConfig: AgentConfig;
  workflowSteps: WorkflowStep[];
}

const MetricCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <Card>
    <div className="flex items-center p-4">
      <div className="p-3 rounded-full bg-base-300 text-brand-secondary">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-text-secondary">{title}</p>
        <p className="text-2xl font-semibold text-text-primary">{value}</p>
      </div>
    </div>
  </Card>
);

const Dashboard: React.FC<DashboardProps> = ({ metrics, agentStatus, agentConfig, workflowSteps }) => {
    const statusInfo = {
        [AgentStatus.Idle]: { text: 'Idle', color: 'bg-gray-500' },
        [AgentStatus.Initializing]: { text: 'Initializing...', color: 'bg-blue-500 animate-pulse' },
        [AgentStatus.Executing]: { text: 'Executing Plan', color: 'bg-green-500' },
        [AgentStatus.Optimizing]: { text: 'Optimizing Strategy', color: 'bg-yellow-500' },
        [AgentStatus.Error]: { text: 'Error Occurred', color: 'bg-red-500' },
    };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <div className="flex items-center p-4">
                <div className="p-3 rounded-full bg-base-300 text-brand-secondary">
                    <StatusIcon />
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-text-secondary">Agent Status</p>
                    <div className="flex items-center mt-1">
                        <span className={`h-3 w-3 rounded-full ${statusInfo[agentStatus].color} mr-2`}></span>
                        <p className="text-xl font-semibold text-text-primary">{statusInfo[agentStatus].text}</p>
                    </div>
                </div>
            </div>
        </Card>
        <MetricCard title="Total Revenue" value={`$${metrics.totalRevenue.toLocaleString()}`} icon={<DollarSignIcon />} />
        <MetricCard title="Website Traffic" value={metrics.websiteTraffic.toLocaleString()} icon={<UsersIcon />} />
        <MetricCard title="Conversion Rate" value={`${metrics.conversionRate.toFixed(1)}%`} icon={<TargetIcon />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-lg font-semibold text-text-primary mb-4 px-6 pt-6">Revenue Overview (Last 6 Months)</h3>
              <div className="h-96 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics.revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1E293B',
                        borderColor: '#334155',
                        color: '#F1F5F9'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#14B8A6" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
             <AgentWorkflow steps={workflowSteps} niche={agentConfig.niche} primaryGoal={agentConfig.primaryGoal} />
          </div>
      </div>

    </div>
  );
};

export default Dashboard;