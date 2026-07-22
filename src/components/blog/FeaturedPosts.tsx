import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { PostCard } from './PostCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  getViews: (post: BlogPost) => string;
}

export const FeaturedPosts: React.FC<FeaturedPostsProps> = ({
  posts,
  onPostClick,
  getViews
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
        <Star className="w-6 h-6" />
        Featured Articles
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            featured={true}
            onPostClick={onPostClick}
            views={getViews(post)}
          />
        ))}
      </div>
    </motion.section>
  );
};
