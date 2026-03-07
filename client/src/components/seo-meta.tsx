import { useEffect } from 'react';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const defaultSEO = {
  title: "Best Contractor Job Management & Scheduling App | CONSTRUKTR",
  description: "CONSTRUKTR is the #1 contractor management app. Generate quotes in 30 seconds, smart scheduling, same-day payments. Built for HVAC, plumbing, electrical, roofing contractors in all 50 states.",
  keywords: "contractor app, job management software, construction scheduling, plumber software, HVAC management, electrical contractor app, roofing software, contractor quotes, payment processing",
  ogImage: "https://CONSTRUKTR.ai/og-image.png",
  canonicalUrl: "https://CONSTRUKTR.ai"
};

export default function SEOMeta({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  canonicalUrl = defaultSEO.canonicalUrl
}: SEOMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('viewport', 'width=device-width, initial-scale=1');
    updateMeta('theme-color', 'var(--color-brand-600)');

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', 'CONSTRUKTR', true);
    updateMeta('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:site', '@construktr');

    // Additional SEO tags
    updateMeta('author', 'CONSTRUKTR');
    updateMeta('application-name', 'CONSTRUKTR');
    updateMeta('apple-mobile-web-app-title', 'CONSTRUKTR');
    updateMeta('apple-mobile-web-app-capable', 'yes');
    updateMeta('mobile-web-app-capable', 'yes');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // DNS prefetch for performance
    const addDNSPrefetch = (url: string) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'dns-prefetch');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    };

    addDNSPrefetch('//fonts.googleapis.com');
    addDNSPrefetch('//www.googletagmanager.com');
    addDNSPrefetch('//www.google-analytics.com');

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}