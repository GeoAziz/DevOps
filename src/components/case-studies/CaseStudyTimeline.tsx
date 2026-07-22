import React from 'react';
import { AlertCircle, Settings, GitBranch } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import { TechBadge } from '../visual/VisualComponents';

interface CaseStudyTimelineProps {
  study: CaseStudy;
}

export const CaseStudyTimeline: React.FC<CaseStudyTimelineProps> = ({ study }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Challenge
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {study.challenge}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} category={study.category} size="sm" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
            Architecture Pattern
          </h3>
          <p className="text-gray-300 mb-2 font-medium">
            {study.architecture?.pattern}
          </p>
          <div className="flex flex-wrap gap-2">
            {study.architecture?.components.map((component) => (
              <span key={component} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                {component}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
