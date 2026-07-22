import React from 'react';
import { Zap, TrendingUp, BarChart3, Target } from 'lucide-react';
import { CaseStudyMetrics } from '../../data/caseStudies';

interface MetricsPanelProps {
  metrics: CaseStudyMetrics;
}

export const MetricsPanel: React.FC<MetricsPanelProps> = ({ metrics }) => {
  const getIconForMetric = (metric: string) => {
    switch (metric) {
      case 'deploymentTime':
        return <Zap className="w-5 h-5" />;
      case 'cost':
        return <TrendingUp className="w-5 h-5" />;
      case 'performance':
        return <BarChart3 className="w-5 h-5" />;
      case 'availability':
        return <Target className="w-5 h-5" />;
      case 'scalability':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {Object.entries(metrics).map(([key, metric]) => (
        <div key={key} className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            {getIconForMetric(key)}
            <h4 className="font-bold text-white capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
          </div>

          {key === 'deploymentTime' && metric && 'before' in metric && 'after' in metric && 'improvement' in metric && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Before</span>
                <span className="text-red-400">{metric.before}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">After</span>
                <span className="text-green-400">{metric.after}</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-400">Improvement</span>
                <span className="text-green-400">-{metric.improvement}</span>
              </div>
            </div>
          )}

          {key === 'cost' && metric && 'before' in metric && 'after' in metric && 'reduction' in metric && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Before</span>
                <span className="text-red-400">{metric.before}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">After</span>
                <span className="text-green-400">{metric.after}</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-400">Reduction</span>
                <span className="text-green-400">-{metric.reduction}</span>
              </div>
            </div>
          )}

          {key === 'availability' && metric && 'uptime' in metric && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Uptime</span>
                <span className="text-green-400">{metric.uptime}</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-400">Improvement</span>
                <span className="text-green-400">+{metric.improvement}</span>
              </div>
            </div>
          )}

          {key === 'scalability' && metric && 'capacity' in metric && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Capacity</span>
                <span className="text-green-400">{metric.capacity}</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-400">Improvement</span>
                <span className="text-green-400">+{metric.improvement}</span>
              </div>
            </div>
          )}

          {key === 'performance' && metric && 'improvement' in metric && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-400">Performance Gain</span>
                <span className="text-green-400">+{metric.improvement}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
