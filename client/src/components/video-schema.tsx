import { useEffect } from "react";

interface VideoSchemaProps {
  videoUrl: string;
  title: string;
  description: string;
  duration: string; // ISO 8601 format (e.g., "PT45S" for 45 seconds)
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601 format
}

export default function VideoSchema({
  videoUrl,
  title,
  description,
  duration,
  thumbnailUrl,
  uploadDate
}: VideoSchemaProps) {
  useEffect(() => {
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": title,
      "description": description,
      "thumbnailUrl": thumbnailUrl,
      "uploadDate": uploadDate,
      "duration": duration,
      "contentUrl": videoUrl,
      "embedUrl": videoUrl,
      "publisher": {
        "@type": "Organization",
        "name": "CONSTRUKTR",
        "logo": {
          "@type": "ImageObject",
          "url": "https://construktr.ai/construktr-logo.svg"
        }
      },
      "creator": {
        "@type": "Organization",
        "name": "CONSTRUKTR"
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "CONSTRUKTR",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android"
      }
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(videoSchema);
    script.id = 'video-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('video-schema');
    if (existing) {
      document.head.removeChild(existing);
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaElement = document.getElementById('video-schema');
      if (schemaElement) {
        document.head.removeChild(schemaElement);
      }
    };
  }, [videoUrl, title, description, duration, thumbnailUrl, uploadDate]);

  return null;
}