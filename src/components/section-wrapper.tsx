import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionWrapper({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn('scroll-mt-20', className)}>
      {children}
    </section>
  );
}
