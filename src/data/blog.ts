/**
 * DEPRECATED: Use src/lib/blogContentLoader.ts instead
 * This file is kept for backwards compatibility
 * Blog posts are now loaded from /content/blog/*.json
 */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: 'DevOps' | 'Cloud Infrastructure' | 'Full-Stack';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  date: string;
  featured: boolean;
  views: string;
  likes: string;
  comments: string;
  excerpt: string;
  tags: string[];
  heroImage?: string;
  content: string;
}

/**
 * DEPRECATED - Keep only for backwards compatibility
 * Blog posts are now loaded from the content pipeline
 * See src/lib/blogContentLoader.ts
 */
export const BLOG_POSTS: BlogPost[] = [];
