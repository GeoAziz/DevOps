import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, BarChart3 } from 'lucide-react';

interface CaseStudyTabsProps {
  activeTab: 'overview' | 'solution' | 'results';
  onTabChange: (tab: 'overview' | 'solution' | 'results') => void;
}

export const CaseStudyTabs: React.FC<CaseStudyTabsProps> = ({
  activeTab,
  onTabChange
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
    { id: 'solution', label: 'Solution', icon: <Code className="w-4 h-4" /> },
    { id: 'results', label: 'Results', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <div className="flex border-b border-gray-700">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          whileHover={{ y: -2 }}
          onClick={() => onTabChange(tab.id as any)}
          className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'text-green-400 border-b-2 border-green-400'
              : 'text-gray-400 hover:text-green-400'
          }`}
        >
          {tab.icon}
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};
