import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { InteractiveButton } from '../visual/VisualComponents';

interface CaseStudyCTAProps {
  onDownload?: () => void;
  onStart?: () => void;
}

export const CaseStudyCTA: React.FC<CaseStudyCTAProps> = ({ onDownload, onStart }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
    >
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        INTERESTED_IN_A_SIMILAR_PROJECT?
      </h2>
      <p className="text-green-200 mb-6 max-w-2xl mx-auto">
        Let's discuss how we can transform your infrastructure and achieve similar results for your organization.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <InteractiveButton
          variant="primary"
          icon={<ArrowRight className="w-4 h-4" />}
          onClick={onStart}
        >
          Start Your Project
        </InteractiveButton>

        <InteractiveButton
          variant="outline"
          icon={<FileText className="w-4 h-4" />}
          onClick={onDownload}
        >
          Download Case Study PDF
        </InteractiveButton>
      </div>
    </motion.section>
  );
};
