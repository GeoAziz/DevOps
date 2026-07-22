import { useEffect } from 'react';

interface PageMetaData {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

/**
 * Hook to manage page metadata (title, description, og tags)
 * Automatically updates document title and meta tags
 */
export const usePageMeta = (meta: PageMetaData) => {
  useEffect(() => {
    // Update title
    document.title = meta.title;

    // Update description meta tag
    let descriptionMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = meta.description;

    // Update og:title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.content = meta.title;

    // Update og:description
    let ogDescMeta = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.content = meta.description;

    // Update og:image if provided
    if (meta.ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.content = meta.ogImage;
    }

    // Update og:url if provided
    if (meta.ogUrl) {
      let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.content = meta.ogUrl;
    }
  }, [meta]);
};
