import { useState, useEffect } from 'react';
import { BlogPost, loadBlogPosts, getFeaturedPosts } from '../lib/blogContentLoader';

/**
 * Hook to load all blog posts
 */
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const loadedPosts = await loadBlogPosts();
        setPosts(loadedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load posts'));
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

/**
 * Hook to load featured blog posts
 */
export function useFeaturedPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const loadedPosts = await getFeaturedPosts();
        setPosts(loadedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load featured posts'));
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
