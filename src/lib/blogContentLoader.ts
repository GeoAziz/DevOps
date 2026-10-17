/**
 * Blog Content Loader for Browser Environment
 * Loads blog posts from /content/blog/*.json at runtime using fetch
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

// Cache for loaded posts
let cachedPosts: BlogPost[] | null = null;

// List of blog post files (must be manually maintained or generated at build time)
const BLOG_POST_FILES = [
  'content/blog/01-eks-gitops.json',
  'content/blog/02-terraform-iac.json',
  'content/blog/03-devops-trends-2025.json',
  'content/blog/04-websocket-realtime.json',
  'content/blog/05-docker-kubernetes.json',
  'content/blog/06-github-actions-cicd.json',
];

/**
 * Load all blog posts from content directory
 * Results are cached to avoid repeated network requests
 */
export async function loadBlogPosts(): Promise<BlogPost[]> {
  // Return cached posts if available
  if (cachedPosts !== null) {
    return cachedPosts;
  }

  try {
    const posts: BlogPost[] = [];
    
    // Fetch each blog post file
    for (const file of BLOG_POST_FILES) {
      try {
        const response = await fetch(`/${file}`);
        if (response.ok) {
          const post: BlogPost = await response.json();
          posts.push(post);
        }
      } catch (error) {
        console.warn(`Failed to load blog post from ${file}:`, error);
      }
    }

    // Sort by date descending
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Cache the results
    cachedPosts = posts;
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    // Return fallback posts if loading fails
    return getFallbackBlogPosts();
  }
}

/**
 * Load a single blog post by slug
 */
export async function loadBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await loadBlogPosts();
  return posts.filter(post => post.featured);
}

/**
 * Fallback posts for when loading fails
 */
function getFallbackBlogPosts(): BlogPost[] {
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
      heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
      content: "# From Zero to Hero: Building a Production-Grade EKS Cluster with GitOps\n\nIn today's cloud-native world, managing Kubernetes infrastructure efficiently is crucial..."
    }
  ];
}
