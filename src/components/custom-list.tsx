import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './section-title';

export function CustomList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="h-full rounded-lg border-l-4 border-primary bg-card p-6 shadow-md transition-all hover:shadow-xl">
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 border-b border-dashed border-border/60 pb-3 text-foreground/90 last:border-none"
          >
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
