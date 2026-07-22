import React from 'react';
import { motion } from 'framer-motion';

interface BlogSortProps {
  sortBy: 'date' | 'views' | 'likes';
  onSortChange: (sortBy: 'date' | 'views' | 'likes') => void;
}

export const BlogSort: React.FC<BlogSortProps> = ({ sortBy, onSortChange }) => {
  return (
    <motion.select
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value as 'date' | 'views' | 'likes')}
      className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400"
    >
      <option value="date">Latest</option>
      <option value="views">Most Viewed</option>
      <option value="likes">Most Liked</option>
    </motion.select>
  );
};
