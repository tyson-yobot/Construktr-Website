import { ExternalLink } from "lucide-react";

interface Product {
  name: string;
  url: string;
  tagline: string;
  anchors: string[];
}

interface ProductGridProps {
  products: Product[];
  currentProduct?: string;
}

export default function ProductGrid({ products, currentProduct = "Construktr" }: ProductGridProps) {
  const otherProducts = products.filter(p => p.name !== currentProduct);
  
  if (otherProducts.length === 0) return null;

  return (
    <div className="py-16 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
          Explore Our Ecosystem
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {otherProducts.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors" />
              </div>
              
              <p className="text-[var(--color-text-secondary)] mb-4">
                {product.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {product.anchors.map((anchor, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                  >
                    {anchor}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
