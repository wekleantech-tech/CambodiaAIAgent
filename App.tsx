
import React, { useState, useCallback, useEffect } from 'react';
import type { AgentConfig, LogEntry, TrendAnalysis, WorkflowStep } from './types';
import { Page, AgentStatus, WorkflowStepStatus } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StrategyConfig from './components/StrategyConfig';
import Monitoring from './components/Monitoring';
import ActivityLog from './components/ActivityLog';
import AgentWorkflow from './components/AgentWorkflow';
import { generateInitialLogs, generateTrendAnalysis as fetchTrendAnalysis, generateWorkflowSteps } from './services/geminiService';
import { INITIAL_METRICS, INITIAL_CONFIG } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [agentConfig, setAgentConfig] = useState<AgentConfig>(INITIAL_CONFIG);
  const [agentStatus, setAgentStatus] = useState<AgentStatus>(AgentStatus.Idle);
  const [metrics, setMetrics] = useState(INITIAL_METRICS);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(true);

  const simulateWorkflow = (steps: WorkflowStep[]) => {
    setAgentStatus(AgentStatus.Executing);

    const executeStep = (index: number) => {
      if (index >= steps.length) {
        setAgentStatus(AgentStatus.Idle);
        return;
      }

      const currentStep = steps[index];

      setWorkflowSteps(prevSteps =>
        prevSteps.map(step =>
          step.id === currentStep.id
            ? { ...step, status: WorkflowStepStatus.InProgress }
            : step
        )
      );

      setTimeout(() => {
        setWorkflowSteps(prevSteps =>
          prevSteps.map(step =>
            step.id === currentStep.id
              ? { ...step, status: WorkflowStepStatus.Completed }
              : step
          )
        );

        setLogs(prevLogs => [
          {
            timestamp: new Date().toISOString(),
            message: `Task completed: ${currentStep.title}`,
            status: 'SUCCESS',
          },
          ...prevLogs,
        ]);

        executeStep(index + 1);
      }, 2000 + Math.random() * 2000);
    };

    executeStep(0);
  };

  const handleDeployAgent = useCallback(() => {
    setAgentStatus(AgentStatus.Initializing);
    setIsLoadingLogs(true);
    setLogs([]);
    setWorkflowSteps([]);

    generateWorkflowSteps(agentConfig.niche)
      .then(newSteps => {
        setWorkflowSteps(newSteps);
        simulateWorkflow(newSteps);
      })
      .catch(error => {
          console.error("Error generating workflow:", error);
          setAgentStatus(AgentStatus.Error);
      });

    generateInitialLogs(agentConfig.niche)
      .then(newLogs => {
          setLogs(newLogs);
          setMetrics(prev => ({
            ...prev,
            totalRevenue: prev.totalRevenue + Math.random() * 100,
            websiteTraffic: prev.websiteTraffic + Math.floor(Math.random() * 5000),
            conversionRate: Math.random() * 5,
          }));
      })
      .catch(console.error)
      .finally(() => setIsLoadingLogs(false));

  }, [agentConfig.niche]);
  
  useEffect(() => {
    generateInitialLogs(agentConfig.niche)
      .then(setLogs)
      .catch(console.error)
      .finally(() => setIsLoadingLogs(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return <Dashboard metrics={metrics} agentStatus={agentStatus} agentConfig={agentConfig} workflowSteps={workflowSteps} />;
      case Page.Strategy:
        return <StrategyConfig config={agentConfig} setConfig={setAgentConfig} onDeploy={handleDeployAgent} status={agentStatus} />;
      case Page.Workflow:
        return <AgentWorkflow steps={workflowSteps} niche={agentConfig.niche} primaryGoal={agentConfig.primaryGoal} />;
      case Page.Monitoring:
        return <Monitoring fetchTrendAnalysis={fetchTrendAnalysis} />;
      case Page.Logs:
        return <ActivityLog logs={logs} isLoading={isLoadingLogs} />;
      default:
        return <Dashboard metrics={metrics} agentStatus={agentStatus} agentConfig={agentConfig} workflowSteps={workflowSteps} />;
    }
  };

  return (
    <div className="flex h-screen bg-base-100 font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-100 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
