import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveButton } from '../visual/VisualComponents';

interface BlogNewsletterProps {
  onSubscribe?: (email: string) => void;
}

export const BlogNewsletter: React.FC<BlogNewsletterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    if (email && onSubscribe) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
    >
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        STAY_UPDATED.EXE
      </h2>
      <p className="text-green-200 mb-6 max-w-2xl mx-auto">
        Subscribe to get the latest DevOps insights, tutorials, and best practices delivered to your inbox.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
        />
        <InteractiveButton variant="primary" onClick={handleSubmit}>
          Subscribe
        </InteractiveButton>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        No spam, unsubscribe at any time.
      </p>
    </motion.section>
  );
};
