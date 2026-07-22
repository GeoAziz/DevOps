import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Star } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { TechBadge } from '../visual/VisualComponents';

interface PostModalProps {
  post: BlogPost;
  onClose: () => void;
  views: string;
}

export const PostModal: React.FC<PostModalProps> = ({ post, onClose, views }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-gray-700 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <TechBadge name={post.category} category={post.category} size="sm" />
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
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views} views</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="prose prose-invert prose-green max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-green-400 mb-4">
                    {paragraph.substring(2)}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-green-400 mb-3 mt-6">
                    {paragraph.substring(3)}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-green-400 mb-2 mt-4">
                    {paragraph.substring(4)}
                  </h3>
                );
              } else if (paragraph.startsWith('```')) {
                const isClosing = paragraph === '```';
                if (isClosing) {
                  return <div key={index}></div>;
                }
                const nextParagraph = post.content.split('\n')[index + 1];
                return (
                  <pre key={index} className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-green-400">{nextParagraph}</code>
                  </pre>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return <br key={index} />;
            })}
          </div>

          {/* Tags Footer */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
