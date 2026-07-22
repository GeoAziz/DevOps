import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { AnimatedBackground } from '../components/visual/VisualComponents';
import EnhancedCaseStudies from '../components/case-studies/EnhancedCaseStudies';

const CaseStudies: React.FC = () => {
  usePageMeta({
    title: 'Case Studies - Real-World DevOps Projects',
    description: 'Detailed case studies showcasing successful cloud migrations, Kubernetes deployments, and infrastructure automation projects with measurable impact.',
    ogUrl: 'https://neeraj-devops.vercel.app/case-studies',
  });
  return (
    <AnimatedBackground>
      <EnhancedCaseStudies />
    </AnimatedBackground>
  );
};

export default CaseStudies;