import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { AnimatedBackground } from '../components/visual/VisualComponents';
import EnhancedBlog from '../components/blog/EnhancedBlog';

const Blog: React.FC = () => {
  usePageMeta({
    title: 'Technical Blog - DevOps & Cloud Engineering Articles',
    description: 'In-depth articles on Kubernetes, Docker, CI/CD pipelines, AWS, Terraform, and infrastructure automation best practices.',
    ogUrl: 'https://neeraj-devops.vercel.app/blog',
  });
  return (
    <AnimatedBackground>
      <EnhancedBlog />
    </AnimatedBackground>
  );
};

export default Blog;