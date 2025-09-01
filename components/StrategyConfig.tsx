
import React from 'react';
import type { AgentConfig } from '../types';
import { Niche, AgentStatus } from '../types';
import Card from './ui/Card';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';
import { NICHE_DETAILS, MONETIZATION_OPTIONS } from '../constants';
import { MegaphoneIcon, BookOpenIcon, YoutubeIcon, GraduationCapIcon } from './Icons';

interface StrategyConfigProps {
  config: AgentConfig;
  setConfig: React.Dispatch<React.SetStateAction<AgentConfig>>;
  onDeploy: () => void;
  status: AgentStatus;
}

const NicheCard: React.FC<{
  niche: Niche;
  details: { description: string; icon: string };
  isSelected: boolean;
  onSelect: (niche: Niche) => void;
}> = ({ niche, details, isSelected, onSelect }) => {
  const icons: { [key: string]: React.ReactNode } = {
    Megaphone: <MegaphoneIcon />,
    BookOpen: <BookOpenIcon />,
    Youtube: <YoutubeIcon />,
    GraduationCap: <GraduationCapIcon />,
  };
  return (
    <div
      onClick={() => onSelect(niche)}
      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-brand-primary bg-base-300/50 shadow-lg' : 'border-base-300 bg-base-200 hover:border-brand-secondary'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${isSelected ? 'bg-brand-primary' : 'bg-base-300'} text-white`}>
          {icons[details.icon]}
        </div>
        <div>
          <h4 className="font-semibold text-lg text-text-primary">{niche}</h4>
          <p className="text-sm text-text-secondary mt-1">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

const StrategyConfig: React.FC<StrategyConfigProps> = ({ config, setConfig, onDeploy, status }) => {
  const handleInputChange = <K extends keyof AgentConfig,>(key: K, value: AgentConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };
  
  const handleMonetizationChange = (option: string) => {
    const currentMethods = config.monetizationMethods;
    const newMethods = currentMethods.includes(option)
      ? currentMethods.filter(item => item !== option)
      : [...currentMethods, option];
    handleInputChange('monetizationMethods', newMethods);
  };

  const isDeploying = status === AgentStatus.Initializing || status === AgentStatus.Executing;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">1. Select a Niche</h2>
        <p className="mt-2 text-text-secondary">Choose the primary business model for the AI agent. This will define its core tasks.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(NICHE_DETAILS).map(([niche, details]) => (
            <NicheCard
              key={niche}
              niche={niche as Niche}
              details={details}
              isSelected={config.niche === niche}
              onSelect={(selectedNiche) => handleInputChange('niche', selectedNiche)}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-base-300 pt-8">
        <h2 className="text-2xl font-bold text-text-primary">2. Configure Agent Parameters</h2>
        <p className="mt-2 text-text-secondary">Fine-tune the agent's operational parameters to match your strategy.</p>
        <Card className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <Input 
                label="Agent Name" 
                value={config.agentName} 
                onChange={(e) => handleInputChange('agentName', e.target.value)}
            />
            <Select 
                label="Primary Goal" 
                value={config.primaryGoal} 
                onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
            >
              <option>Maximize Revenue</option>
              <option>Maximize Traffic</option>
              <option>Build Brand</option>
            </Select>
            <Input 
                label="Target Audience" 
                value={config.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
            />
            <Select 
                label="Content Language" 
                value={config.language} 
                onChange={(e) => handleInputChange('language', e.target.value as AgentConfig['language'])}
            >
              <option value="English">English</option>
              <option value="Khmer">Khmer</option>
              <option value="Bilingual">Bilingual</option>
            </Select>
          </div>
        </Card>
      </div>
      
      <div className="border-t border-base-300 pt-8">
        <h2 className="text-2xl font-bold text-text-primary">3. Choose Monetization Methods</h2>
        <p className="mt-2 text-text-secondary">Select how the agent will generate revenue. You can choose multiple options.</p>
         <Card className="mt-6 p-6">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {MONETIZATION_OPTIONS.map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-secondary"
                    checked={config.monetizationMethods.includes(option)}
                    onChange={() => handleMonetizationChange(option)}
                  />
                  <span className="text-text-primary">{option}</span>
                </label>
              ))}
            </div>
         </Card>
      </div>

      <div className="border-t border-base-300 pt-8 flex justify-end">
        <Button onClick={onDeploy} disabled={isDeploying}>
          {isDeploying ? 'Deploying Agent...' : 'Deploy Agent & Start Plan'}
        </Button>
      </div>
    </div>
  );
};

export default StrategyConfig;
