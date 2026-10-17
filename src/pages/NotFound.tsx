import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center font-mono space-y-6 bg-bg-surface border border-neutral-700 p-8 rounded-xl shadow-glow"
      >
        <div className="text-accent-500 text-5xl font-bold tracking-wider">
          404
        </div>
        <div className="text-primary-500 text-lg">
          $ err: path_not_found
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed">
          The requested resource could not be located in this deployment cluster. It might have been moved, decommissioned, or never existed.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-500 text-bg-surface font-semibold hover:bg-primary-600 transition-colors shadow-glow"
          >
            <Home className="mr-2 h-4 w-4" />
            $ cd /home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-neutral-600 text-neutral-300 hover:text-primary-500 hover:border-primary-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            $ history --back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

