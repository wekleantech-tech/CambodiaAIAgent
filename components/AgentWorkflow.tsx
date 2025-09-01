
import React from 'react';
import type { WorkflowStep, Niche } from '../types';
import { WorkflowStepStatus } from '../types';
import Card from './ui/Card';
import { CheckCircleIcon, ClockIcon, XCircleIcon, CogIcon, RocketIcon } from './Icons';

interface AgentWorkflowProps {
    steps: WorkflowStep[];
    niche: Niche;
    primaryGoal: string;
}

const statusInfo: { [key in WorkflowStepStatus]: { icon: React.ReactNode; color: string; bgColor: string } } = {
    [WorkflowStepStatus.Completed]: { icon: <CheckCircleIcon className="text-green-500" />, color: 'text-green-400', bgColor: 'bg-green-500/10' },
    [WorkflowStepStatus.InProgress]: { icon: <ClockIcon className="text-blue-500 animate-spin" />, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
    [WorkflowStepStatus.Pending]: { icon: <CogIcon className="text-gray-500" />, color: 'text-gray-400', bgColor: 'bg-gray-500/10' },
    [WorkflowStepStatus.Failed]: { icon: <XCircleIcon className="text-red-500" />, color: 'text-red-400', bgColor: 'bg-red-500/10' },
};

const WorkflowStepItem: React.FC<{ step: WorkflowStep, isLast: boolean }> = ({ step, isLast }) => {
    const info = statusInfo[step.status];

    return (
        <li className="relative flex items-start space-x-4 pb-8">
            {!isLast && <div className="absolute left-4 top-5 -ml-px mt-1 w-0.5 h-full bg-base-300" aria-hidden="true" />}
            <div className={`relative flex h-8 w-8 items-center justify-center rounded-full ${info.bgColor}`}>
                {info.icon}
            </div>
            <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-text-primary">{step.title}</h4>
                <p className="text-sm text-text-secondary">{step.description}</p>
                <span className={`text-xs font-medium ${info.color}`}>{step.status}</span>
            </div>
        </li>
    );
};


const AgentWorkflow: React.FC<AgentWorkflowProps> = ({ steps, niche, primaryGoal }) => {
    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                    <RocketIcon className="text-brand-secondary"/>
                    <h3 className="text-lg font-semibold text-text-primary">Agent Execution Plan</h3>
                </div>
                <p className="text-sm text-text-secondary mb-6">
                    Current Objective: <span className="font-semibold text-text-primary">{primaryGoal}</span> within the <span className="font-semibold text-text-primary">{niche}</span> niche.
                </p>
                
                {steps.length > 0 ? (
                    <ul>
                        {steps.map((step, index) => (
                            <WorkflowStepItem key={step.id} step={step} isLast={index === steps.length - 1} />
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-8">
                        <CogIcon className="mx-auto h-12 w-12 text-gray-500"/>
                        <h3 className="mt-2 text-sm font-medium text-text-primary">No Plan Generated</h3>
                        <p className="mt-1 text-sm text-text-secondary">Deploy the agent from the Strategy page to generate an execution plan.</p>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default AgentWorkflow;