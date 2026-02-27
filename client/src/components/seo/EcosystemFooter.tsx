import { ExternalLink } from "lucide-react";

interface CrossLink {
  from: string;
  to: string;
  anchor: string;
  placements: string[];
}

interface EcosystemFooterProps {
  crossLinks: CrossLink[];
  currentSite: string;
}

export default function EcosystemFooter({ crossLinks, currentSite }: EcosystemFooterProps) {
  const relevantLinks = crossLinks.filter(link => 
    link.from === currentSite && link.placements.includes("footer.brand")
  );

  if (relevantLinks.length === 0) return null;

  return (
    <div className="border-t border-white/10 pt-6 mt-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--clr-text-2)]">
        <span>CONSTRUKTR is</span>
        {relevantLinks.map((link, idx) => (
          <span key={idx}>
            <a
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-blue hover:text-white transition-colors inline-flex items-center gap-1"
            >
              {link.anchor}
              <ExternalLink className="w-3 h-3" />
            </a>
            {idx < relevantLinks.length - 1 && <span className="ml-2">&</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
