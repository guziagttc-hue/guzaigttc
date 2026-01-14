import { cn } from '@/lib/utils';

export function SectionTitle({
  children,
  className,
  fullWidth = false,
}: {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  const titleClasses = cn(
    'bg-primary text-primary-foreground inline-block py-3 px-8 text-xl font-semibold shadow-lg',
    fullWidth ? 'w-full text-center rounded-lg' : 'rounded-r-full'
  );

  return (
    <div className={cn('mb-10', fullWidth ? 'text-center' : '', className)}>
      <h2 className={titleClasses}>{children}</h2>
    </div>
  );
}
