import { Check } from "lucide-react";

export default function FeatureList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="mt-1 h-5 w-5 text-electric-blue flex-shrink-0" aria-hidden="true" />
          <span className="text-[var(--clr-text-2)] text-sm leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
}