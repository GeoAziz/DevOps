import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { TechBadge, EngagementMetrics } from '../visual/VisualComponents';

interface PostCardProps {
  post: BlogPost;
  index?: number;
  view?: 'grid' | 'list';
  featured?: boolean;
  onPostClick: (post: BlogPost) => void;
  views: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  index = 0,
  view: _view = 'grid',
  featured = false,
  onPostClick,
  views
}) => {
  if (featured) {
    return (
      <motion.article
        whileHover={{ scale: 1.02 }}
        onClick={() => onPostClick(post)}
        className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <TechBadge name={post.category} category={post.category} size="sm" />
            <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <EngagementMetrics
              views={views}
              likes={post.likes}
              comments={post.comments}
              featured={post.featured}
            />

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>{post.readTime}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onPostClick(post)}
      className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group hover:border-green-400 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <TechBadge name={post.category} category={post.category} size="sm" />
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 text-xs rounded ${
                post.difficulty === 'Beginner'
                  ? 'bg-green-500/20 text-green-400'
                  : post.difficulty === 'Intermediate'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {post.difficulty}
            </span>
            {post.featured && (
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <EngagementMetrics
          views={views}
          likes={post.likes}
          comments={post.comments}
          featured={post.featured}
        />

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};
