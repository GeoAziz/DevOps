import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Eye, Heart, Clock } from 'lucide-react';
import { StatsCard } from '../visual/VisualComponents';

interface BlogMetricsProps {
  totalArticles: number;
  totalViews: string;
  engagementRate: string;
  avgReadTime: string;
}

export const BlogMetrics: React.FC<BlogMetricsProps> = ({
  totalArticles,
  totalViews,
  engagementRate,
  avgReadTime
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
    >
      <StatsCard
        title="Total Articles"
        value={totalArticles.toString()}
        icon={<BookOpen className="w-6 h-6" />}
      />
      <StatsCard
        title="Total Views"
        value={totalViews}
        change="Real-time tracking"
        icon={<Eye className="w-6 h-6" />}
        trend="up"
      />
      <StatsCard
        title="Engagement Rate"
        value={engagementRate}
        change="Active readership"
        icon={<Heart className="w-6 h-6" />}
        trend="up"
      />
      <StatsCard
        title="Avg. Read Time"
        value={avgReadTime}
        change="Industry average: 7 min"
        icon={<Clock className="w-6 h-6" />}
        trend="up"
      />
    </motion.div>
  );
};
