
import React, { useState, useCallback } from 'react';
import type { TrendAnalysis } from '../types';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';
import { SearchIcon, TrendingUpIcon, LightbulbIcon } from './Icons';

interface MonitoringProps {
  fetchTrendAnalysis: (keyword: string) => Promise<TrendAnalysis>;
}

const Monitoring: React.FC<MonitoringProps> = ({ fetchTrendAnalysis }) => {
  const [keyword, setKeyword] = useState('Cambodia travel budget');
  const [analysis, setAnalysis] = useState<TrendAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(() => {
    if (!keyword.trim()) return;
    setIsLoading(true);
    setError(null);
    setAnalysis(null);
    fetchTrendAnalysis(keyword)
      .then(setAnalysis)
      .catch(() => setError('Failed to fetch trend analysis. Please try again.'))
      .finally(() => setIsLoading(false));
  }, [keyword, fetchTrendAnalysis]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">Market Trend Analysis</h2>
        <p className="mt-2 text-text-secondary">Use AI to analyze keyword demand and competition in Cambodia to find profitable opportunities.</p>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="w-full">
              <Input
                label="Keyword or Topic to Analyze"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., 'English lessons Phnom Penh'"
              />
            </div>
            <Button onClick={handleAnalyze} disabled={isLoading} className="w-full md:w-auto">
              <div className="flex items-center justify-center">
                <SearchIcon className="mr-2" />
                {isLoading ? 'Analyzing...' : 'Analyze Trend'}
              </div>
            </Button>
          </div>
        </div>
      </Card>
      
      {isLoading && <div className="text-center p-8 text-text-secondary">Loading analysis...</div>}
      
      {error && <Card className="p-6 bg-red-900/50 border-red-700 text-red-200">{error}</Card>}

      {analysis && (
        <Card className="animate-fade-in">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-secondary mb-4">Analysis for "{keyword}"</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-text-primary flex items-center"><TrendingUpIcon className="mr-2" /> Trend Score</h4>
                        <div className="flex items-center mt-2 space-x-4">
                             <div className="w-full bg-base-300 rounded-full h-4">
                                <div className="bg-brand-primary h-4 rounded-full" style={{ width: `${analysis.trendScore}%` }}></div>
                             </div>
                             <span className="font-bold text-2xl text-text-primary">{analysis.trendScore}/100</span>
                        </div>
                    </div>
                     <div>
                        <h4 className="font-semibold text-text-primary">AI Summary</h4>
                        <p className="mt-2 text-text-secondary">{analysis.summary}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-text-primary flex items-center"><LightbulbIcon className="mr-2"/> Related Keywords</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {analysis.relatedKeywords.map((kw, index) => (
                                <span key={index} className="px-3 py-1 bg-base-300 text-brand-secondary rounded-full text-sm font-medium">{kw}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
      )}
    </div>
  );
};

export default Monitoring;
