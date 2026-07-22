import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle } from 'lucide-react';

interface CaseStudySolutionProps {
  solution: string[];
  impact: string[];
}

export const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({
  solution,
  impact
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5" />
          Solution Approach
        </h3>
        <div className="space-y-4">
          {solution.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 bg-gray-800/50 rounded-lg"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-gray-300 leading-relaxed flex-1">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact List */}
      <div className="space-y-3">
        {impact.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
