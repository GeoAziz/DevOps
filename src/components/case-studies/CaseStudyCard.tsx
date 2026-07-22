import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import { TechBadge } from '../visual/VisualComponents';

interface CaseStudyCardProps {
  study: CaseStudy;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  study,
  isSelected,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(study.id)}
      className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
        isSelected
          ? 'bg-green-400/10 border-green-400'
          : 'bg-gray-900/50 border-gray-700 hover:border-green-400/50'
      } ${study.featured ? 'ring-2 ring-yellow-400/50' : ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <TechBadge name={study.category} category={study.category} size="sm" />
        {study.featured && (
          <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
        )}
      </div>

      <h3 className="text-white font-bold mb-1 text-sm line-clamp-2">
        {study.title}
      </h3>

      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
        {study.subtitle}
      </p>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Calendar className="w-3 h-3" />
        <span>{study.timeline.duration}</span>
        <span>•</span>
        <span>{study.timeline.start} - {study.timeline.end}</span>
      </div>
    </motion.div>
  );
};
