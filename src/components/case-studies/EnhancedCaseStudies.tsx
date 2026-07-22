import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedBackground, 
  StatsCard
} from '../visual/VisualComponents';
import { FileText, TrendingUp, Target } from 'lucide-react';
import { CASE_STUDIES } from '../../data/caseStudies';
import { CaseStudyCard } from './CaseStudyCard';
import { CaseStudyTabs } from './CaseStudyTabs';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyTimeline } from './CaseStudyTimeline';
import { CaseStudySolution } from './CaseStudySolution';
import { MetricsPanel } from './MetricsPanel';
import { CaseStudyCTA } from './CaseStudyCTA';

const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];

const EnhancedCaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(CASE_STUDIES[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'results'>('overview');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const selectedStudyData = CASE_STUDIES.find((study) => study.id === selectedStudy);

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === selectedCategory);

  return (
    <AnimatedBackground>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            CASE_STUDIES.EXE
          </h1>
          <p className="text-green-200 text-lg max-w-3xl mx-auto">
            Real-world projects showcasing innovative solutions, measurable impact, and technical excellence across DevOps, Cloud Infrastructure, and Full-Stack Development
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <StatsCard
            title="Projects Completed"
            value={CASE_STUDIES.length.toString()}
            icon={<FileText className="w-6 h-6" />}
          />
          <StatsCard
            title="Cost Savings"
            value="35%"
            change="Average across projects"
            icon={<TrendingUp className="w-6 h-6" />}
            trend="up"
          />
          <StatsCard
            title="Uptime Achieved"
            value="99.5%"
            change="Production reliability"
            icon={<Target className="w-6 h-6" />}
            trend="up"
          />
        </motion.div>

        {/* Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-400 text-black'
                    : 'bg-gray-800 text-green-400 border border-gray-600 hover:border-green-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                isSelected={selectedStudy === study.id}
                onClick={setSelectedStudy}
              />
            ))}
          </div>
        </motion.div>

        {/* Selected Study Details */}
        <AnimatePresence mode="wait">
          {selectedStudyData && (
            <motion.div
              key={selectedStudyData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Study Header */}
              <CaseStudyHeader study={selectedStudyData} />

              {/* Tab Navigation */}
              <CaseStudyTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'overview' && (
                      <CaseStudyTimeline study={selectedStudyData} />
                    )}

                    {activeTab === 'solution' && (
                      <CaseStudySolution
                        solution={selectedStudyData.solution}
                        impact={selectedStudyData.impact}
                      />
                    )}

                    {activeTab === 'results' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          Impact & Results
                        </h3>
                        <MetricsPanel metrics={selectedStudyData.impactMetrics} />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <CaseStudyCTA />
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedCaseStudies;