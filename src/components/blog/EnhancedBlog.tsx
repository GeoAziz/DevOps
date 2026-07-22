import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import { 
  AnimatedBackground, 
  ViewToggle
} from '../visual/VisualComponents';
import { BlogPost } from '@/lib/blogContentLoader';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { BlogMetrics } from './BlogMetrics';
import { BlogFilters } from './BlogFilters';
import { BlogSort } from './BlogSort';
import { FeaturedPosts } from './FeaturedPosts';
import { PostCard } from './PostCard';
import { PostModal } from './PostModal';
import { BlogNewsletter } from './BlogNewsletter';

const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];

const EnhancedBlog: React.FC = () => {
  const { posts: BLOG_POSTS, loading: postsLoading } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogViews, setBlogViews] = useState<{ [key: number]: number }>({});

  const filteredPosts = useMemo(() => {
    let filtered = BLOG_POSTS;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
        case 'likes':
          return parseInt(b.likes) - parseInt(a.likes);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPosts = BLOG_POSTS.filter((post) => post.featured);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    // Simulate real-time view increment
    setBlogViews((prev) => ({
      ...prev,
      [post.id]: (prev[post.id] || parseInt(post.views.replace('k', '000'))) + 1
    }));
  };

  const getPostViews = (post: BlogPost) => {
    const views = blogViews[post.id] || parseInt(post.views.replace('k', '000'));
    return views > 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();
  };

  const getTotalViews = () => {
    return BLOG_POSTS.reduce((total, post) => {
      return total + (blogViews[post.id] || parseInt(post.views.replace('k', '000')));
    }, 0);
  };

  const totalViews = getTotalViews();
  const totalViewsFormatted = totalViews > 1000 ? `${(totalViews / 1000).toFixed(1)}k` : totalViews.toString();

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
            TECH_BLOG.EXE
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and best practices from the world of DevOps, Cloud Infrastructure, and Full-Stack Development
          </p>
        </motion.div>

        {/* Stats Section */}
        <BlogMetrics
          totalArticles={BLOG_POSTS.length}
          totalViews={totalViewsFormatted}
          engagementRate="72%"
          avgReadTime="8 min"
        />

        {/* Loading State */}
        {postsLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
            </div>
            <p className="text-green-300 mt-4">Loading articles...</p>
          </motion.div>
        )}

        {/* Featured Posts */}
        {!postsLoading && (
          <FeaturedPosts
            posts={featuredPosts}
            onPostClick={handlePostClick}
            getViews={getPostViews}
          />
        )}

        {/* Filters and Search */}
        {!postsLoading && (
          <>
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>

          <BlogFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ViewToggle view={view} onViewChange={setView} />

          <BlogSort sortBy={sortBy} onSortChange={setSortBy} />
        </motion.div>

        {/* Blog Posts Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${view}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              view === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }
          >
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                index={index}
                view={view}
                onPostClick={handlePostClick}
                views={getPostViews(post)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <BlogNewsletter />
            </>
        )}

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <PostModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
              views={getPostViews(selectedPost)}
            />
          )}
        </AnimatePresence>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedBlog;