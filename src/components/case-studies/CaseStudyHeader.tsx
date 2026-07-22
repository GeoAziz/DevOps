import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import { TechBadge } from '../visual/VisualComponents';

interface CaseStudyHeaderProps {
  study: CaseStudy;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ study }) => {
  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <TechBadge name={study.category} category={study.category} />
            {study.featured && (
              <span className="text-xs text-yellow-400 font-medium">⭐ Featured Project</span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {study.title}
          </h2>
          <p className="text-green-400 text-lg">
            {study.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="text-center">
            <Calendar className="w-5 h-5 mx-auto mb-1 text-green-400" />
            <p className="font-medium">{study.timeline.start}</p>
            <p className="text-xs">Start Date</p>
          </div>
          <div className="text-center">
            <Clock className="w-5 h-5 mx-auto mb-1 text-green-400" />
            <p className="font-medium">{study.timeline.duration}</p>
            <p className="text-xs">Duration</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-400" />
            <p className="font-medium">{study.timeline.end}</p>
            <p className="text-xs">Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};
