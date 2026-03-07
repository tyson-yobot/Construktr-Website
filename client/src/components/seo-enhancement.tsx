import { useEffect } from 'react';

interface SEOEnhancementProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export default function SEOEnhancement({
  title = "CONSTRUKTR - Best Contractor Job Management & Scheduling App",
  description = "Transform your contracting business with AI-powered quotes, smart scheduling, and instant payments. Join 2,500+ contractors who've increased revenue by 247% with CONSTRUKTR.",
  keywords = [
    "contractor app",
    "job management software", 
    "scheduling app for contractors",
    "contractor quotes",
    "payment processing contractors",
    "HVAC software",
    "plumbing software",
    "electrical contractor app"
  ],
  canonicalUrl = "https://construktr.replit.app"
}: SEOEnhancementProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'CONSTRUKTR' }
    ];
    
    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];
    
    twitterTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
  }, [title, description, keywords, canonicalUrl]);
  
  return null; // This component only manages head tags
}