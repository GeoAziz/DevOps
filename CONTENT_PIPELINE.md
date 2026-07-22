# Content Pipeline Guide

## Overview

The blog has been upgraded to use a **content pipeline** that separates content from code. Blog posts are now managed as individual JSON files instead of being hard-coded in the application.

## Structure

```
content/
  blog/
    01-eks-gitops.json
    02-terraform-iac.json
    03-devops-trends-2025.json
    04-websocket-realtime.json
    05-docker-kubernetes.json
    06-github-actions-cicd.json
```

## Blog Post Format

Each blog post is a JSON file with the following structure:

```json
{
  "id": 1,
  "slug": "unique-post-slug",
  "title": "Post Title",
  "category": "DevOps",
  "difficulty": "Intermediate",
  "readTime": "8 min read",
  "date": "2025-01-15",
  "featured": true,
  "views": "2.5k",
  "likes": "156",
  "comments": "23",
  "excerpt": "Brief description of the post",
  "tags": ["tag1", "tag2", "tag3"],
  "heroImage": "https://example.com/image.jpg",
  "content": "# Markdown content here..."
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique identifier |
| `slug` | string | URL-friendly identifier (e.g., "my-post-title") |
| `title` | string | Post title |
| `category` | string | One of: "DevOps", "Cloud Infrastructure", "Full-Stack" |
| `difficulty` | string | One of: "Beginner", "Intermediate", "Advanced" |
| `readTime` | string | Estimated read time (e.g., "8 min read") |
| `date` | string | Publication date (ISO format: YYYY-MM-DD) |
| `featured` | boolean | Whether to show in featured section |
| `views` | string | View count (e.g., "2.5k", "1200") |
| `likes` | string | Like count |
| `comments` | string | Comment count |
| `excerpt` | string | Short description for preview cards |
| `tags` | array | Array of tag strings |
| `heroImage` | string | (Optional) Hero image URL |
| `content` | string | Markdown-formatted content |

## How It Works

### Development Flow

1. **Create new post**: Add a JSON file to `/content/blog/`
2. **Write content**: Use Markdown format for the content field
3. **Dev server**: Files are automatically loaded at runtime
4. **Testing**: Use the existing blog interface to view and filter posts

### Build Flow

1. **Build process**: `npm run build`
2. **Vite plugin**: Automatically copies `content/` directory to `dist/`
3. **Deployment**: Content files are served alongside the built app
4. **Runtime loading**: Browser fetches blog posts from `/content/blog/*.json`

## Adding a New Blog Post

1. Create a new file in `/content/blog/` (follow naming: `NN-slug.json`)
2. Fill in all required fields
3. Write your content in Markdown format
4. Add tags and set `featured: true/false`
5. Save and commit
6. The post appears automatically in the blog interface

### Example

```bash
# Create file
touch content/blog/07-new-post.json
```

```json
{
  "id": 7,
  "slug": "my-new-post",
  "title": "My New DevOps Post",
  "category": "DevOps",
  "difficulty": "Intermediate",
  "readTime": "10 min read",
  "date": "2025-02-01",
  "featured": false,
  "views": "0",
  "likes": "0",
  "comments": "0",
  "excerpt": "A brief overview of the post content",
  "tags": ["kubernetes", "devops", "best-practices"],
  "content": "# My New DevOps Post\n\nContent here..."
}
```

## Content Loaders

### `src/lib/blogContentLoader.ts`

Main loader that:
- Fetches all blog posts from `/content/blog/*.json`
- Caches results to avoid repeated requests
- Provides utilities to get featured posts or single posts by slug

### `src/hooks/useBlogPosts.tsx`

React hook for components:
- `useBlogPosts()` - Load all blog posts
- `useFeaturedPosts()` - Load featured posts only

```typescript
// Usage in components
const { posts, loading, error } = useBlogPosts();
```

## Features

✅ **Easy to maintain**: Content separate from code  
✅ **Git-friendly**: Posts are versioned with your code  
✅ **No database needed**: Static JSON files  
✅ **Markdown support**: Full Markdown formatting in content  
✅ **Caching**: Posts are cached to avoid repeated requests  
✅ **Fallback**: Hard-coded fallback posts if loading fails  
✅ **Type-safe**: Full TypeScript support  

## Future Enhancements

- [ ] Add MDX support for interactive components in posts
- [ ] Integrate headless CMS (Contentful, Sanity, etc.)
- [ ] Add Markdown to HTML rendering
- [ ] Implement full-text search
- [ ] Add commenting system
- [ ] Add related posts suggestions

## Troubleshooting

### Posts not loading

1. Check network tab for 404 errors
2. Ensure content files are in the right location
3. Verify JSON syntax is valid
4. Check browser console for errors

### Content not updating

1. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear cache in dev tools
3. Restart dev server

## File Locations

- **Content files**: `/content/blog/*.json`
- **Loader**: `/src/lib/blogContentLoader.ts`
- **Hook**: `/src/hooks/useBlogPosts.tsx`
- **Component**: `/src/components/blog/EnhancedBlog.tsx`
- **Build config**: `/vite.config.ts`
