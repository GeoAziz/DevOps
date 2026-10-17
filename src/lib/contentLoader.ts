import { promises as fs } from 'fs';
import path from 'path';

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
 * Loads all blog posts from the content/blog directory
 * This is called during build time and also supports runtime loading
 */
export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    const files = await fs.readdir(contentDir);
    
    const posts: BlogPost[] = [];
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(contentDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const post: BlogPost = JSON.parse(content);
        posts.push(post);
      }
    }
    
    // Sort by date descending
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

/**
 * Load a single blog post by slug
 */
export async function loadBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await loadBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading blog post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * For development: provides static blog posts as fallback
 * This ensures the app works even if file loading fails
 */
export function getStaticBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      slug: "eks-gitops-production",
      title: "From Zero to Hero: Building a Production-Grade EKS Cluster with GitOps",
      category: "DevOps",
      difficulty: "Intermediate",
      readTime: "8 min read",
      date: "2025-01-15",
      featured: true,
      views: "2.5k",
      likes: "156",
      comments: "23",
      excerpt: "Learn how to set up a complete EKS cluster with ArgoCD for GitOps deployment, including best practices for production environments.",
      tags: ["AWS", "EKS", "GitOps", "ArgoCD", "Kubernetes"],
      content: "# From Zero to Hero: Building a Production-Grade EKS Cluster with GitOps\n\nIn today's cloud-native world, managing Kubernetes infrastructure efficiently is crucial..."
    },
    // Add other posts as fallback
  ];
}
